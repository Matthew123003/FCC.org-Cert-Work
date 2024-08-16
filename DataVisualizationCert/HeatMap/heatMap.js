// Define the dimensions and margins for the SVG
const margin = { top: 50, right: 20, bottom: 100, left: 100 };  // Defines margins for the SVG container
const width = 960 - margin.left - margin.right;  // Calculates the width of the drawable area
const height = 500 - margin.top - margin.bottom;  // Calculates the height of the drawable area

// Create the SVG container and group element (g)
const svg = d3.select("#heat-map")  // Selects the element with the ID 'heat-map'
  .append("svg")  // Appends an SVG element to the selected element
  .attr("width", width + margin.left + margin.right)  // Sets the total width of the SVG including margins
  .attr("height", height + margin.top + margin.bottom)  // Sets the total height of the SVG including margins
  .append("g")  // Appends a 'g' (group) element to the SVG for the drawable area
  .attr("transform", `translate(${margin.left},${margin.top})`);  // Translates the group element to account for margins

// Define the month names for the y-axis
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Define the color scale for the heat map
const colors = ["#4575b4", "#91bfdb", "#e0f3f8", "#fee090", "#fc8d59", "#d73027"];  // Array of colors representing temperature variance

// Load the data
d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json').then(data => {
  data.monthlyVariance.forEach(d => {
    d.month -= 1;  // Adjusts the month value to be 0-based (e.g., 0 = January)
  });

  // Define the x-scale (years)
  const x = d3.scaleBand()  // Creates a band scale for the x-axis (years)
    .domain(data.monthlyVariance.map(d => d.year))  // Sets the domain to the array of years
    .range([0, width])  // Maps the domain to the width of the drawable area
    .padding(0.01);  // Adds a small padding between bands

  // Define the y-scale (months)
  const y = d3.scaleBand()  // Creates a band scale for the y-axis (months)
    .domain(data.monthlyVariance.map(d => d.month))  // Sets the domain to the array of months (0-based index)
    .range([0, height])  // Maps the domain to the height of the drawable area
    .padding(0.01);  // Adds a small padding between bands

  // Define the color scale for temperature variance
  const colorScale = d3.scaleQuantile()  // Creates a quantile scale to map variance values to colors
    .domain([d3.min(data.monthlyVariance, d => d.variance), d3.max(data.monthlyVariance, d => d.variance)])  // Sets the domain from min to max variance
    .range(colors);  // Maps the domain to the predefined colors

  // Add the x-axis (years)
  svg.append("g")  // Appends a group element for the x-axis
    .attr("id", "x-axis")  // Sets the ID for the x-axis for styling and identification
    .attr("transform", `translate(0, ${height})`)  // Positions the x-axis at the bottom of the drawable area
    .call(d3.axisBottom(x).tickValues(x.domain().filter((year, i) => !(year % 10))));  // Creates the x-axis with ticks every 10 years

  // Add the y-axis (months)
  svg.append("g")  // Appends a group element for the y-axis
    .attr("id", "y-axis")  // Sets the ID for the y-axis for styling and identification
    .call(d3.axisLeft(y).tickFormat(d => months[d]));  // Creates the y-axis with month names as tick labels

  // Add the heat map cells
  svg.selectAll()  // Selects all elements (initially empty) for binding data
    .data(data.monthlyVariance, d => d.year + ':' + d.month)  // Binds the data with a unique key for each cell
    .enter()
    .append("rect")  // Appends a 'rect' element for each data point (cell)
    .attr("class", "cell")  // Assigns the class 'cell' to each rectangle for styling
    .attr("x", d => x(d.year))  // Positions the rectangle on the x-axis based on the year
    .attr("y", d => y(d.month))  // Positions the rectangle on the y-axis based on the month
    .attr("width", x.bandwidth())  // Sets the width of each rectangle to match the band width of the x-scale
    .attr("height", y.bandwidth())  // Sets the height of each rectangle to match the band width of the y-scale
    .attr("data-month", d => d.month)  // Adds a data attribute for the month
    .attr("data-year", d => d.year)  // Adds a data attribute for the year
    .attr("data-temp", d => data.baseTemperature + d.variance)  // Adds a data attribute for the temperature
    .style("fill", d => colorScale(d.variance))  // Fills the rectangle with a color based on the variance value
    .on("mouseover", function(event, d) {  // Adds an event listener for mouseover to display the tooltip
      const temp = (data.baseTemperature + d.variance).toFixed(2);  // Calculates and formats the temperature
      d3.select("#tooltip")  // Selects the tooltip element
        .style("opacity", 1)  // Makes the tooltip visible
        .html(`<strong>${d.year} - ${months[d.month]}</strong><br>Temp: ${temp}&#8451;<br>Variance: ${d.variance.toFixed(2)}&#8451;`)  // Sets the content of the tooltip
        .attr("data-year", d.year)  // Updates the tooltip's data attribute with the year
        .style("left", (event.pageX + 5) + "px")  // Positions the tooltip near the mouse cursor (horizontally)
        .style("top", (event.pageY - 28) + "px");  // Positions the tooltip near the mouse cursor (vertically)
    })
    .on("mouseout", function() {  // Adds an event listener for mouseout to hide the tooltip
      d3.select("#tooltip")  // Selects the tooltip element
        .style("opacity", 0);  // Makes the tooltip invisible
    });

  // Add the legend for the color scale
  const legend = svg.append("g")  // Appends a group element for the legend
    .attr("id", "legend")  // Sets the ID for the legend
    .attr("transform", `translate(${width - 260},${height + 40})`);  // Positions the legend on the SVG

  const legendWidth = 250;  // Sets the width of the legend
  const legendHeight = 20;  // Sets the height of the legend

  // Define the scale for the legend
  const legendScale = d3.scaleLinear()  // Creates a linear scale for the legend
    .domain([d3.min(data.monthlyVariance, d => data.baseTemperature + d.variance), d3.max(data.monthlyVariance, d => data.baseTemperature + d.variance)])  // Sets the domain from min to max temperature
    .range([0, legendWidth]);  // Maps the domain to the width of the legend

  // Define the axis for the legend
  const legendAxis = d3.axisBottom(legendScale)  // Creates a bottom axis for the legend
    .tickSize(legendHeight)  // Sets the tick size to the height of the legend
    .ticks(6);  // Defines the number of ticks

  // Draw the rectangles for the legend
  legend.selectAll()  // Selects all elements (initially empty) for binding data
    .data(colors)  // Binds the color array to the legend rectangles
    .enter()
    .append("rect")  // Appends a rectangle for each color
    .attr("x", (d, i) => legendScale.range()[0] + i * (legendWidth / colors.length))  // Positions each rectangle within the legend
    .attr("y", 0)  // Positions the rectangle at the top of the legend
    .attr("width", legendWidth / colors.length)  // Sets the width of each rectangle
    .attr("height", legendHeight)  // Sets the height of each rectangle
    .style("fill", d => d);  // Fills each rectangle with the corresponding color

  // Add the legend axis
  legend.append("g")  // Appends a group element for the legend axis
    .attr("transform", `translate(0,${legendHeight})`)  // Positions the axis below the rectangles
    .call(legendAxis)  // Draws the axis
    .select(".domain").remove();  // Removes the axis line
});
