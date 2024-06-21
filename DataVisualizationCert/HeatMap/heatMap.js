const margin = { top: 50, right: 20, bottom: 100, left: 100 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#heat-map")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const colors = ["#4575b4", "#91bfdb", "#e0f3f8", "#fee090", "#fc8d59", "#d73027"];

d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json').then(data => {
  data.monthlyVariance.forEach(d => {
    d.month -= 1;  // Adjust month to 0-based index
  });

  const x = d3.scaleBand()
    .domain(data.monthlyVariance.map(d => d.year))
    .range([0, width])
    .padding(0.01);

  const y = d3.scaleBand()
    .domain(data.monthlyVariance.map(d => d.month))
    .range([0, height])
    .padding(0.01);

  const colorScale = d3.scaleQuantile()
    .domain([d3.min(data.monthlyVariance, d => d.variance), d3.max(data.monthlyVariance, d => d.variance)])
    .range(colors);

  svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickValues(x.domain().filter((year, i) => !(year % 10))));

  svg.append("g")
    .attr("id", "y-axis")
    .call(d3.axisLeft(y).tickFormat(d => months[d]));

  svg.selectAll()
    .data(data.monthlyVariance, d => d.year + ':' + d.month)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", d => x(d.year))
    .attr("y", d => y(d.month))
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .attr("data-month", d => d.month)
    .attr("data-year", d => d.year)
    .attr("data-temp", d => data.baseTemperature + d.variance)
    .style("fill", d => colorScale(d.variance))
    .on("mouseover", function(event, d) {
      const temp = (data.baseTemperature + d.variance).toFixed(2);
      d3.select("#tooltip")
        .style("opacity", 1)
        .html(`<strong>${d.year} - ${months[d.month]}</strong><br>Temp: ${temp}&#8451;<br>Variance: ${d.variance.toFixed(2)}&#8451;`)
        .attr("data-year", d.year)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function() {
      d3.select("#tooltip")
        .style("opacity", 0);
    });

  const legend = svg.append("g")
    .attr("id", "legend")
    .attr("transform", `translate(${width - 260},${height + 40})`);

  const legendWidth = 250;
  const legendHeight = 20;

  const legendScale = d3.scaleLinear()
    .domain([d3.min(data.monthlyVariance, d => data.baseTemperature + d.variance), d3.max(data.monthlyVariance, d => data.baseTemperature + d.variance)])
    .range([0, legendWidth]);

  const legendAxis = d3.axisBottom(legendScale)
    .tickSize(legendHeight)
    .ticks(6);

  legend.selectAll()
    .data(colors)
    .enter()
    .append("rect")
    .attr("x", (d, i) => legendScale.range()[0] + i * (legendWidth / colors.length))
    .attr("y", 0)
    .attr("width", legendWidth / colors.length)
    .attr("height", legendHeight)
    .style("fill", d => d);

  legend.append("g")
    .attr("transform", `translate(0,${legendHeight})`)
    .call(legendAxis)
    .select(".domain").remove();
});
