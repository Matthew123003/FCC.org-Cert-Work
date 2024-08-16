const svg = d3.select('#bar-chart');  // Selects the SVG element with the ID 'bar-chart' where the bar chart will be drawn
const margin = {top: 50, right: 30, bottom: 50, left: 60};  // Defines the margins around the chart for spacing
const width = +svg.attr('width') - margin.left - margin.right;  // Calculates the width of the chart area by subtracting margins from the SVG width
const height = +svg.attr('height') - margin.top - margin.bottom;  // Calculates the height of the chart area by subtracting margins from the SVG height
const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);  // Appends a 'g' (group) element to the SVG and positions it using the margins

// Tooltip
const tooltip = d3.select("#tooltip");  // Selects the tooltip element by its ID to display data when hovering over bars

// Fetch the data
d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(data => {  // Fetches the GDP data from the provided URL
  const dataset = data.data;  // Extracts the data array from the fetched JSON object

  // Parse date
  const parseTime = d3.timeParse('%Y-%m-%d');  // Creates a date parser to convert date strings into JavaScript Date objects
  dataset.forEach(d => {
    d[0] = parseTime(d[0]);  // Parses the date in each data entry and updates the date field with the parsed Date object
  });

  // Set the scales
  const x = d3.scaleTime()  // Creates a time scale for the x-axis
              .domain(d3.extent(dataset, d => d[0]))  // Sets the domain of the x-axis to the extent (min and max) of the dates in the dataset
              .range([0, width]);  // Maps the domain to the range of the chart's width

  const y = d3.scaleLinear()  // Creates a linear scale for the y-axis
              .domain([0, d3.max(dataset, d => d[1])])  // Sets the domain of the y-axis from 0 to the maximum GDP value in the dataset
              .range([height, 0]);  // Maps the domain to the range of the chart's height (inverted because SVG y-coordinates start from the top)

  // Add x-axis
  g.append('g')  // Appends a 'g' element to group the x-axis elements
    .attr('id', 'x-axis')  // Assigns an ID to the x-axis group for styling and referencing
    .attr('transform', `translate(0,${height})`)  // Positions the x-axis at the bottom of the chart area
    .call(d3.axisBottom(x));  // Calls the axisBottom function to generate the x-axis based on the x scale

  // Add y-axis
  g.append('g')  // Appends a 'g' element to group the y-axis elements
    .attr('id', 'y-axis')  // Assigns an ID to the y-axis group for styling and referencing
    .call(d3.axisLeft(y));  // Calls the axisLeft function to generate the y-axis based on the y scale

  // Add bars
  g.selectAll('.bar')  // Selects all elements with the class 'bar' (initially none)
    .data(dataset)  // Binds the dataset to the selected elements (in this case, creating new elements since there are none yet)
    .enter().append('rect')  // For each data point, appends a 'rect' element to represent a bar in the bar chart
    .attr('class', 'bar')  // Assigns the class 'bar' to each rectangle for styling
    .attr('x', d => x(d[0]))  // Sets the x position of the bar based on the date using the x scale
    .attr('y', d => y(d[1]))  // Sets the y position of the bar based on the GDP value using the y scale
    .attr('width', width / dataset.length)  // Sets the width of each bar, dividing the total width by the number of data points
    .attr('height', d => height - y(d[1]))  // Sets the height of each bar based on the GDP value
    .attr('data-date', d => d3.timeFormat('%Y-%m-%d')(d[0]))  // Adds a data attribute for the date, formatted as a string
    .attr('data-gdp', d => d[1])  // Adds a data attribute for the GDP value
    .on('mouseover', (event, d) => {  // Adds an event listener for when the mouse hovers over a bar
      tooltip.transition()  // Transitions the tooltip to visible
        .duration(200)  // Duration of the transition
        .style('opacity', .9);  // Sets the opacity to make the tooltip visible
      tooltip.html(`Date: ${d3.timeFormat('%Y-%m-%d')(d[0])}<br>GDP: ${d[1]} Billion`)  // Sets the content of the tooltip to display the date and GDP
        .attr('data-date', d3.timeFormat('%Y-%m-%d')(d[0]))  // Updates the tooltip's data attribute with the date
        .style('left', `${event.pageX + 5}px`)  // Positions the tooltip near the mouse cursor (horizontally)
        .style('top', `${event.pageY - 28}px`);  // Positions the tooltip near the mouse cursor (vertically)
    })
    .on('mouseout', () => {  // Adds an event listener for when the mouse leaves a bar
      tooltip.transition()  // Transitions the tooltip to invisible
        .duration(500)  // Duration of the transition
        .style('opacity', 0);  // Sets the opacity to make the tooltip invisible
    });

  // Add title
  svg.append('text')  // Appends a 'text' element to the SVG for the chart title
     .attr('id', 'title')  // Assigns an ID to the title for styling and referencing
     .attr('x', width / 2 + margin.left)  // Positions the title in the horizontal center of the chart area
     .attr('y', margin.top / 2)  // Positions the title above the chart
     .attr('text-anchor', 'middle')  // Centers the text horizontally
     .style('font-size', '24px')  // Sets the font size of the title
     .text('United States GDP');  // Sets the content of the title
});
