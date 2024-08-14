// Define the dimensions and margins for the SVG
const width = 1000;
const height = 1000;

// Define the color scale
const colorScale = d3.scaleThreshold()
  .domain([0, 20, 40, 60, 80])
  .range(["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]);

// Define the SVG canvas
const svg = d3.select("#choropleth-map")
  .attr("width", width)
  .attr("height", height);

// Define the tooltip
const tooltip = d3.select("#tooltip");

// Load the data
Promise.all([
  d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"),
  d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")
]).then(([countyData, educationData]) => {
  // Define the projection and path generator
  const projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale([1000]);

  const path = d3.geoPath().projection(projection);

  // Create a map of education data by FIPS code
  const educationById = new Map(educationData.map(d => [d.fips, d]));

  // Draw the counties
  svg.selectAll(".county")
    .data(topojson.feature(countyData, countyData.objects.counties).features)
    .enter().append("path")
    .attr("class", "county")
    .attr("d", path)
    .attr("fill", d => {
      const education = educationById.get(d.id);
      return education ? colorScale(education.bachelorsOrHigher) : "#ccc";
    })
    .attr("data-fips", d => d.id)
    .attr("data-education", d => {
      const education = educationById.get(d.id);
      return education ? education.bachelorsOrHigher : "";
    })
    .on("mouseover", (event, d) => {
      const education = educationById.get(d.id);
      tooltip.style("left", `${event.pageX + 5}px`)
        .style("top", `${event.pageY - 28}px`)
        .style("opacity", 1)
        .attr("data-education", education ? education.bachelorsOrHigher : "")
        .html(education ? `County: ${education.area_name}<br>State: ${education.state}<br>Education: ${education.bachelorsOrHigher}%` : "No data");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

  // Add the legend
  const legendWidth = 200;
  const legendHeight = 200;

  const legendSvg = d3.select("#legend").append("svg")
    .attr("width", legendWidth)
    .attr("height", legendHeight);

  const legendData = [
    { color: "#edf8e9", label: "0%" },
    { color: "#bae4b3", label: "20%" },
    { color: "#74c476", label: "40%" },
    { color: "#31a354", label: "60%" },
    { color: "#006d2c", label: "80%" }
  ];

  legendSvg.selectAll(".legend-item")
    .data(legendData)
    .enter().append("g")
    .attr("class", "legend-item")
    .attr("transform", (d, i) => `translate(0, ${i * 30})`);

  legendSvg.selectAll(".legend-item")
    .append("rect")
    .attr("x", 0)
    .attr("width", 20)
    .attr("height", 20)
    .style("fill", d => d.color);

  legendSvg.selectAll(".legend-item")
    .append("text")
    .attr("x", 30)
    .attr("y", 15)
    .text(d => d.label)
    .attr("font-size", "12px")
    .attr("fill", "#000");

}).catch(error => {
  console.error("Error loading or processing data:", error);
});
