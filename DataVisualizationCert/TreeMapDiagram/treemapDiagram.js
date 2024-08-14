// Define the dimensions of the SVG and margins
const width = 960; // Width of the SVG canvas
const height = 600; // Height of the SVG canvas
const margin = { top: 20, right: 20, bottom: 30, left: 40 }; // Margins around the SVG content

// Define scales
const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // Create a color scale for categorical data using a predefined color scheme

// Define the SVG canvas
const svg = d3.select("svg") // Select the SVG element from the DOM
  .attr("width", width) // Set the width of the SVG canvas
  .attr("height", height); // Set the height of the SVG canvas

// Define the tree map layout
const treemap = d3.treemap() // Create a tree map layout generator
  .size([width, height]) // Set the size of the tree map layout to match the SVG dimensions
  .padding(1); // Add padding between tiles

// Load and process the data
d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json").then(data => { // Load JSON data from the URL
  // Extract root data and create hierarchy
  const root = d3.hierarchy(data) // Create a hierarchical structure from the data
    .sum(d => d.value) // Aggregate the values at each node to calculate the size of each tile
    .sort((a, b) => b.value - a.value); // Sort nodes by value in descending order

  treemap(root); // Compute the positions and sizes of each tile in the tree map

  // Add tiles to the SVG
  const tiles = svg.selectAll(".tile") // Select all elements with the class 'tile'
    .data(root.leaves()) // Bind the hierarchical data to the tiles
    .enter().append("rect") // Create 'rect' elements for each data point
    .attr("class", "tile") // Add the class 'tile' to each rectangle
    .attr("x", d => d.x0) // Set the x-position of each tile based on its computed position
    .attr("y", d => d.y0) // Set the y-position of each tile based on its computed position
    .attr("width", d => d.x1 - d.x0) // Set the width of each tile based on the difference between x1 and x0
    .attr("height", d => d.y1 - d.y0) // Set the height of each tile based on the difference between y1 and y0
    .attr("fill", d => colorScale(d.data.category)) // Set the fill color of each tile based on its category
    .attr("data-name", d => d.data.name) // Add a 'data-name' attribute with the name of the data
    .attr("data-category", d => d.data.category) // Add a 'data-category' attribute with the category of the data
    .attr("data-value", d => d.data.value) // Add a 'data-value' attribute with the value of the data
    .on("mouseover", (event, d) => { // Add a mouseover event listener to show tooltip
      d3.select("#tooltip") // Select the tooltip element
        .style("left", `${event.pageX + 5}px`) // Position the tooltip slightly to the right of the mouse cursor
        .style("top", `${event.pageY - 28}px`) // Position the tooltip slightly above the mouse cursor
        .style("display", "inline-block") // Make the tooltip visible
        .attr("data-value", d.data.value) // Set 'data-value' attribute on tooltip
        .html(`Name: ${d.data.name}<br>Category: ${d.data.category}<br>Value: ${d.data.value}`); // Set the HTML content of the tooltip
    })
    .on("mouseout", () => { // Add a mouseout event listener to hide tooltip
      d3.select("#tooltip").style("display", "none"); // Hide the tooltip
    });

  // Add legend
  const legend = svg.append("g") // Append a new group element for the legend
    .attr("id", "legend") // Set the id of the legend group
    .attr("transform", `translate(${width - 150}, 10)`); // Position the legend within the SVG

  // Add legend items
  const categories = Array.from(new Set(root.leaves().map(d => d.data.category))); // Get unique categories from the data
  legend.selectAll(".legend-item") // Select all elements with the class 'legend-item'
    .data(categories) // Bind the categories data to the legend items
    .enter().append("rect") // Create 'rect' elements for each category
    .attr("class", "legend-item") // Add the class 'legend-item' to each rectangle
    .attr("x", 0) // Set the x-position of each legend item
    .attr("y", (d, i) => i * 20) // Set the y-position of each legend item based on its index
    .attr("width", 20) // Set the width of each legend item
    .attr("height", 20) // Set the height of each legend item
    .attr("fill", d => colorScale(d)); // Set the fill color of each legend item based on the category

  // Add legend labels
  legend.selectAll(".legend-label") // Select all elements with the class 'legend-label'
    .data(categories) // Bind the categories data to the legend labels
    .enter().append("text") // Create 'text' elements for each category label
    .attr("x", 30) // Set the x-position of each text label
    .attr("y", (d, i) => i * 20 + 15) // Set the y-position of each text label based on its index
    .text(d => d); // Set the text content of each label to the category name
});

/*
Dimensions and Margins: Set up the size of the SVG canvas and margins for positioning the tree map layout within the SVG.
Color Scale: Define a color scale to assign different colors to different categories in the data.
SVG Canvas: Create an SVG element and set its width and height, which serves as the container for the tree map.
Tree Map Layout: Define the layout generator for creating the hierarchical tree map, specifying the size and padding.
Data Loading and Processing: Load the JSON data, create a hierarchical structure, compute the positions and sizes of tiles based on the tree map layout.
Tiles: Add rectangles to the SVG for each data point, position and size them according to the tree map layout, and set attributes for interactive elements like tooltips.
Tooltip: Show additional information about each tile when hovered over, including setting the data-value for tooltips.
Legend: Create a legend to indicate which colors correspond to which categories, helping users understand the tree map visualization.
Legend Items and Labels: Add rectangles and text labels to the legend for visual reference of categories and their associated colors.
*/