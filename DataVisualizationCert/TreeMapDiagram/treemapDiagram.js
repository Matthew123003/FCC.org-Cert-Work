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
  