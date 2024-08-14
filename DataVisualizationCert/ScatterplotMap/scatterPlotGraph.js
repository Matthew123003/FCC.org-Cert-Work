// Select the SVG element from the DOM
const svg = d3.select("svg");

// Get the width and height attributes from the SVG element
const width = +svg.attr("width");  // Convert width attribute to a number
const height = +svg.attr("height"); // Convert height attribute to a number

// Define margins for the chart
const margin = { top: 20, right: 20, bottom: 30, left: 50 };

// Calculate the inner width and height by subtracting margins
const innerWidth = width - margin.left - margin.right; // Width for the plotting area
const innerHeight = height - margin.top - margin.bottom; // Height for the plotting area

// Create scales for the x and y axes using time scales
const xScale = d3.scaleTime().range([0, innerWidth]); // Scale for x-axis with time scale
const yScale = d3.scaleTime().range([innerHeight, 0]); // Scale for y-axis with time scale

// Define x-axis and y-axis using the created scales
const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")); // x-axis with year format
const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S")); // y-axis with minute:second format

// Append a group element to the SVG for the chart and apply a transformation for margins
const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`); // Move the group element based on margins

// Load data from the provided JSON URL
d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json").then(data => {
  // Parse time and year strings into Date objects
  const parseTime = d3.timeParse("%M:%S"); // Create a parser for time
  const parseYear = d3.timeParse("%Y"); // Create a parser for year

  data.forEach(d => {
    // Parse each data point’s time and year
    d.Time = parseTime(d.Time); // Convert time string to Date object
    d.Year = parseYear(d.Year); // Convert year string to Date object
  });

  // Set the domain of the x and y scales based on the data extent
  xScale.domain(d3.extent(data, d => d.Year)); // Set x-axis domain to the range of years
  yScale.domain(d3.extent(data, d => d.Time)); // Set y-axis domain to the range of times

  // Add the x-axis to the SVG
  g.append("g")
    .attr("id", "x-axis") // Assign an ID for the x-axis
    .attr("class", "axis") // Assign a class for styling
    .attr("transform", `translate(0,${innerHeight})`) // Move the x-axis to the bottom
    .call(xAxis); // Call the xAxis function to render the axis

  // Add the y-axis to the SVG
  g.append("g")
    .attr("id", "y-axis") // Assign an ID for the y-axis
    .attr("class", "axis") // Assign a class for styling
    .call(yAxis); // Call the yAxis function to render the axis

  // Add dots to the SVG representing data points
  g.selectAll(".dot")
    .data(data) // Bind data to the dots
    .enter().append("circle") // Create circles for each data point
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", d => xScale(d.Year)) // Set the x-coordinate based on the year
    .attr("cy", d => yScale(d.Time)) // Set the y-coordinate based on the time
    .attr("r", 5) // Set the radius of the dots
    .attr("data-xvalue", d => d.Year.getFullYear()) // Set data-xvalue as year string
    .attr("data-yvalue", d => d.Time.toISOString()) // Set data-yvalue as ISO string of time
    .on("mouseover", (event, d) => {
      const year = d.Year.getFullYear(); // Extract the year as a string
      
      // Display the tooltip on mouseover
      d3.select("#tooltip")
        .style("left", `${event.pageX + 5}px`) // Position tooltip near mouse cursor
        .style("top", `${event.pageY - 28}px`) // Position tooltip near mouse cursor
        .style("display", "inline-block") // Show the tooltip
        .attr("data-year", year)  // Set data-year attribute to the year string
        .html(`Year: ${year}<br>Time: ${d3.timeFormat("%M:%S")(d.Time)}`); // Set tooltip content
    })
    .on("mouseout", () => {
      d3.select("#tooltip").style("display", "none"); // Hide the tooltip on mouseout
    });

  // Add a legend to the SVG
  d3.select("#legend").html("<strong>Legend:</strong> Cyclist Data"); // Set legend content

  // Add a title to the SVG
  d3.select("#title").text("Cyclist Data Visualization"); // Set the title text
});
