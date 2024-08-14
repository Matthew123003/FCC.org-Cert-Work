// Define the dimensions of the SVG and margins
const width = 960;
const height = 600;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// Define scales
const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // Color scale for categories

// Define the SVG canvas
const svg = d3.select("svg")
  .attr("width", width)
  .attr("height", height);

// Define the tree map layout
const treemap = d3.treemap()
  .size([width, height])
  .padding(1);

// Load and process the data
d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json").then(data => {
  // Extract root data and create hierarchy
  const root = d3.hierarchy(data)
    .sum(d => d.value) // Set the value of each node
    .sort((a, b) => b.value - a.value); // Sort nodes by value

  treemap(root); // Compute the positions and sizes of each tile

  // Add tiles to the SVG
  const tiles = svg.selectAll(".tile")
    .data(root.leaves())
    .enter().append("rect")
    .attr("class", "tile")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => colorScale(d.data.category)) // Use color scale for fill
    .attr("data-name", d => d.data.name)
    .attr("data-category", d => d.data.category)
    .attr("data-value", d => d.data.value)
    .on("mouseover", (event, d) => {
      d3.select("#tooltip")
        .style("left", `${event.pageX + 5}px`)
        .style("top", `${event.pageY - 28}px`)
        .style("display", "inline-block")
        .attr("data-value", d.data.value) // Set data-value for tooltip
        .html(`Name: ${d.data.name}<br>Category: ${d.data.category}<br>Value: ${d.data.value}`);
    })
    .on("mouseout", () => {
      d3.select("#tooltip").style("display", "none");
    });

  // Add legend
  const legend = svg.append("g")
    .attr("id", "legend")
    .attr("transform", `translate(${width - 150}, 10)`);

  // Add legend items
  const categories = Array.from(new Set(root.leaves().map(d => d.data.category)));
  legend.selectAll(".legend-item")
    .data(categories)
    .enter().append("rect")
    .attr("class", "legend-item")
    .attr("x", 0)
    .attr("y", (d, i) => i * 20)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", d => colorScale(d));

  // Add legend labels
  legend.selectAll(".legend-label")
    .data(categories)
    .enter().append("text")
    .attr("x", 30)
    .attr("y", (d, i) => i * 20 + 15)
    .text(d => d);
});