// Load the dataset from the provided URL
d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json")
  .then(data => { // Once data is successfully loaded, execute the following code
    const w = 800; // Set the width of the SVG element
    const h = 500; // Set the height of the SVG element
    const padding = 60; // Define the padding (margin) for the plot area

    // Create a scale for the x-axis, which maps year to pixel values
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d["year"], 0, 1))) // Set the domain of the x-axis to the range of years in the data
      .range([padding, w - padding]); // Map the domain to pixel values within the SVG width

    // Create a scale for the y-axis, which maps time to pixel values
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d["time"])]) // Set the domain of the y-axis to the range of times in the data
      .range([h - padding, padding]); // Map the domain to pixel values within the SVG height

    // Define the x-axis using the xScale and format ticks as years
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y")); // Format tick labels as years

    // Define the y-axis using the yScale and format ticks as time
    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d => d3.timeFormat("%M:%S")(new Date(0, 0, 0, 0, d))); // Format tick labels as time in minutes and seconds

    // Append an SVG element to the div with id "scatterplot"
    const svg = d3.select("#scatterplot")
      .append("svg")
      .attr("width", w) // Set the width of the SVG element
      .attr("height", h); // Set the height of the SVG element

    // Append the x-axis to the SVG element
    svg.append("g")
      .attr("id", "x-axis") // Set the id attribute for the x-axis
      .attr("transform", `translate(0, ${h - padding})`) // Position the x-axis at the bottom of the SVG
      .call(xAxis); // Draw the x-axis using the defined xAxis

    // Append the y-axis to the SVG element
    svg.append("g")
      .attr("id", "y-axis") // Set the id attribute for the y-axis
      .attr("transform", `translate(${padding}, 0)`) // Position the y-axis on the left side of the SVG
      .call(yAxis); // Draw the y-axis using the defined yAxis

    // Append circles (dots) to the SVG element
    svg.selectAll("circle")
      .data(data) // Bind the data to the circle elements
      .enter() // Create a placeholder for each data point
      .append("circle") // Append a circle for each data point
      .attr("class", "dot") // Set the class attribute for styling
      .attr("cx", d => xScale(new Date(d["year"], 0, 1))) // Set the x-coordinate of the circle using xScale
      .attr("cy", d => yScale(d["time"])) // Set the y-coordinate of the circle using yScale
      .attr("r", 5) // Set the radius of the circles
      .attr("data-xvalue", d => new Date(d["year"], 0, 1).toISOString()) // Set a data attribute for the x value
      .attr("data-yvalue", d => new Date(0, 0, 0, 0, d["time"]).toISOString()) // Set a data attribute for the y value
      .on("mouseover", (event, d) => { // Add mouseover event listener
        d3.select("#tooltip")
          .style("opacity", 1) // Make the tooltip visible
          .attr("data-year", d["year"]) // Set a data attribute for the year
          .html(`Year: ${d["year"]}<br>Time: ${d["time"]}`); // Set the content of the tooltip
      })
      .on("mouseout", () => { // Add mouseout event listener
        d3.select("#tooltip")
          .style("opacity", 0); // Hide the tooltip
      });

    // Append text labels to the SVG element
    svg.selectAll("text")
      .data(data) // Bind the data to the text elements
      .enter() // Create a placeholder for each data point
      .append("text") // Append a text element for each data point
      .attr("x", d => xScale(new Date(d["year"], 0, 1)) + 10) // Set the x-coordinate of the text, offset by 10 units from the circle
      .attr("y", d => yScale(d["time"]) + 5) // Set the y-coordinate of the text, offset by 5 units from the circle
      .text(d => `${d["year"]}, ${d["time"]}`); // Set the content of the text element
  })
  .catch(error => { // Handle any errors that occur during data loading
    console.error("Error loading or processing data:", error); // Log the error to the console
  });
