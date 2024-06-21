document.addEventListener("DOMContentLoaded", function () {
  const width = 800;
  const height = 400;
  const margin = { top: 50, right: 30, bottom: 50, left: 60 };

  const svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background-color", "rgba(0, 0, 0, 0.7)")
    .style("color", "white")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("pointer-events", "none");

  // Fetch the data
  d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(data => {
    const dataset = data.data;

    // Scales
    const xScale = d3.scaleBand()
      .domain(dataset.map(d => new Date(d[0])))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d[1])])
      .nice()
      .range([height, 0]);

    // Axes
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y"));

    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .selectAll(".tick text")
      .attr("class", "tick");

    svg.append("g")
      .attr("id", "y-axis")
      .call(yAxis)
      .selectAll(".tick text")
      .attr("class", "tick");

    // Bars
    svg.selectAll(".bar")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(new Date(d[0])))
      .attr("y", d => yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d[1]))
      .attr("data-date", d => d[0])
      .attr("data-gdp", d => d[1])
      .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`Date: ${d[0]}<br>GDP: ${d[1]} Billion`)
          .attr("data-date", d[0])
          .style("left", (event.pageX + 5) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function () {
        tooltip.transition().duration(500).style("opacity", 0);
      });

    // Title
    svg.append("text")
      .attr("id", "title")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .text("US Gross Domestic Product");
  });
});
