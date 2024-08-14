const tiles = svg.selectAll(".tile")
  .data(data)
  .enter().append("rect") // Add rect elements
  .attr("class", "tile") // Assign class for styling
  .attr("x", d => xScale(d.x)) // Positioning based on data
  .attr("y", d => yScale(d.y))
  .attr("width", d => xScale(d.width)) // Size based on data
  .attr("height", d => yScale(d.height))
  .attr("data-name", d => d.name) // Add data attributes
  .attr("data-category", d => d.category)
  .attr("data-value", d => d.value);

const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // Define color scale

tiles.attr("fill", d => colorScale(d.category)); // Use color scale for filling tiles
  
const legend = svg.append("g")
  .attr("id", "legend");

legend.selectAll(".legend-item")
  .data(colorScale.domain()) // Use color scale domain for legend items
  .enter().append("rect")
  .attr("class", "legend-item")
  .attr("x", (d, i) => 10) // Positioning of legend items
  .attr("y", (d, i) => i * 20)
  .attr("width", 20)
  .attr("height", 20)
  .attr("fill", d => colorScale(d)); // Use the same color scale for legend

tiles.on("mouseover", (event, d) => {
    d3.select("#tooltip")
      .style("left", `${event.pageX + 5}px`)
      .style("top", `${event.pageY - 28}px`)
      .style("display", "inline-block")
      .attr("data-value", d.value) // Set data-value for tooltip
      .html(`Name: ${d.name}<br>Category: ${d.category}<br>Value: ${d.value}`);
  })
  .on("mouseout", () => {
    d3.select("#tooltip").style("display", "none");
  });
  