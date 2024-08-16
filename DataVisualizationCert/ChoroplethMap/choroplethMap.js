// Define the dimensions and margins for the SVG
const width = 1000;  // Sets the width of the SVG canvas
const height = 1000;  // Sets the height of the SVG canvas

// Define the color scale
const colorScale = d3.scaleThreshold()  // Creates a threshold scale to map data values to colors
  .domain([0, 20, 40, 60, 80])  // Defines the domain (breakpoints) for the scale
  .range(["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]);  // Maps the domain values to corresponding colors

// Define the SVG canvas
const svg = d3.select("#choropleth-map")  // Selects the SVG element with the ID 'choropleth-map'
  .attr("width", width)  // Sets the width of the SVG
  .attr("height", height);  // Sets the height of the SVG

// Define the tooltip
const tooltip = d3.select("#tooltip");  // Selects the tooltip element by its ID to display information on hover

// Load the data
Promise.all([  // Loads multiple datasets concurrently
  d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"),  // Loads the GeoJSON data for counties
  d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")  // Loads the education data for counties
]).then(([countyData, educationData]) => {  // After both datasets are loaded

  // Define the projection and path generator
  const projection = d3.geoAlbersUsa()  // Creates a geographic projection (Albers USA)
    .translate([width / 2, height / 2])  // Centers the projection on the SVG canvas
    .scale([1000]);  // Sets the scale of the projection

  const path = d3.geoPath().projection(projection);  // Creates a path generator using the defined projection

  // Create a map of education data by FIPS code
  const educationById = new Map(educationData.map(d => [d.fips, d]));  // Maps education data to county FIPS codes for quick lookup

  // Draw the counties
  svg.selectAll(".county")  // Selects all elements with the class 'county' (initially none)
    .data(topojson.feature(countyData, countyData.objects.counties).features)  // Converts the TopoJSON to GeoJSON features and binds the data
    .enter().append("path")  // Appends a 'path' element for each county
    .attr("class", "county")  // Assigns the class 'county' to each path for styling
    .attr("d", path)  // Uses the path generator to draw the county boundaries
    .attr("fill", d => {  // Sets the fill color for each county
      const education = educationById.get(d.id);  // Retrieves the education data for the county
      return education ? colorScale(education.bachelorsOrHigher) : "#ccc";  // Colors the county based on the education level or grey if no data
    })
    .attr("data-fips", d => d.id)  // Adds a data attribute for the FIPS code
    .attr("data-education", d => {  // Adds a data attribute for the education percentage
      const education = educationById.get(d.id);  // Retrieves the education data for the county
      return education ? education.bachelorsOrHigher : "";  // Returns the education percentage or an empty string if no data
    })
    .on("mouseover", (event, d) => {  // Adds an event listener for mouseover to display the tooltip
      const education = educationById.get(d.id);  // Retrieves the education data for the county
      tooltip.style("left", `${event.pageX + 5}px`)  // Positions the tooltip near the mouse cursor (horizontally)
        .style("top", `${event.pageY - 28}px`)  // Positions the tooltip near the mouse cursor (vertically)
        .style("opacity", 1)  // Makes the tooltip visible
        .attr("data-education", education ? education.bachelorsOrHigher : "")  // Updates the tooltip's data attribute with the education percentage
        .html(education ? `County: ${education.area_name}<br>State: ${education.state}<br>Education: ${education.bachelorsOrHigher}%` : "No data");  // Sets the content of the tooltip
    })
    .on("mouseout", () => {  // Adds an event listener for mouseout to hide the tooltip
      tooltip.style("opacity", 0);  // Makes the tooltip invisible
    });

  // Add the legend
  const legendWidth = 200;  // Sets the width of the legend SVG
  const legendHeight = 200;  // Sets the height of the legend SVG

  const legendSvg = d3.select("#legend").append("svg")  // Selects the element with the ID 'legend' and appends an SVG for the legend
    .attr("width", legendWidth)  // Sets the width of the legend SVG
    .attr("height", legendHeight);  // Sets the height of the legend SVG

  const legendData = [  // Defines the color and label pairs for the legend
    { color: "#edf8e9", label: "0%" },
    { color: "#bae4b3", label: "20%" },
    { color: "#74c476", label: "40%" },
    { color: "#31a354", label: "60%" },
    { color: "#006d2c", label: "80%" }
  ];

  legendSvg.selectAll(".legend-item")  // Selects all elements with the class 'legend-item' (initially none)
    .data(legendData)  // Binds the legend data to the elements
    .enter().append("g")  // Appends a 'g' element for each legend item
    .attr("class", "legend-item")  // Assigns the class 'legend-item' to each group for styling
    .attr("transform", (d, i) => `translate(0, ${i * 30})`);  // Positions each legend item vertically with spacing

  legendSvg.selectAll(".legend-item")  // Selects all legend item groups
    .append("rect")  // Appends a rectangle to each legend item
    .attr("x", 0)  // Positions the rectangle on the x-axis
    .attr("width", 20)  // Sets the width of the rectangle
    .attr("height", 20)  // Sets the height of the rectangle
    .style("fill", d => d.color);  // Fills the rectangle with the corresponding color

  legendSvg.selectAll(".legend-item")  // Selects all legend item groups
    .append("text")  // Appends text to each legend item
    .attr("x", 30)  // Positions the text on the x-axis
    .attr("y", 15)  // Positions the text vertically within the rectangle
    .text(d => d.label)  // Sets the text content to the corresponding label
    .attr("font-size", "12px")  // Sets the font size of the text
    .attr("fill", "#000");  // Sets the fill color of the text

}).catch(error => {  // Catches any errors that occur during data loading or processing
  console.error("Error loading or processing data:", error);  // Logs the error to the console
});
