document.addEventListener("DOMContentLoaded", function () {
  const margin = { top: 20, right: 20, bottom: 60, left: 60 };
  const width = 800 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  const svg = d3.select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const tooltip = d3.select("#tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background-color", "rgba(0, 0, 0, 0.7)")
    .style("color", "white")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("pointer-events", "none");

  d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json').then(data => {
    const dataset = data;

    const parseTime = d3.timeParse("%M:%S");

    const xScale = d3.scaleTime()
      .domain([d3.min(dataset, d => new Date(d.Year - 1, 0)), d3.max(dataset, d => new Date(d.Year + 1, 0))])
      .range([0, width]);

    const yScale = d3.scaleTime()
      .domain(d3.extent(dataset, d => parseTime(d.Time)))
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.format("d"));

    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d3.timeFormat("%M:%S"));

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

    svg.selectAll(".dot")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", d => xScale(new Date(d.Year, 0)))
      .attr("cy", d => yScale(parseTime(d.Time)))
      .attr("r", 6)
      .attr("data-xvalue", d => d.Year)
      .attr("data-yvalue", d => parseTime(d.Time).toISOString())
      .style("fill", d => d.Doping ? "red" : "green")
      .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`${d.Name}: ${d.Nationality}<br>Year: ${d.Year}, Time: ${d.Time}<br>${d.Doping ? d.Doping : "No doping allegations"}`)
          .attr("data-year", d.Year)
          .style("left", (event.pageX + 5) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function () {
        tooltip.transition().duration(500).style("opacity", 0);
      });

    const legend = svg.append("g")
      .attr("id", "legend")
      .attr("transform", `translate(${width - 200}, ${height - 100})`);

    legend.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 20)
      .attr("height", 20)
      .style("fill", "green");

    legend.append("text")
      .attr("x", 30)
      .attr("y", 15)
      .text("No doping allegations");

    legend.append("rect")
      .attr("x", 0)
      .attr("y", 30)
      .attr("width", 20)
      .attr("height", 20)
      .style("fill", "red");

    legend.append("text")
      .attr("x", 30)
      .attr("y", 45)
      .text("Doping allegations");
  });
});
