const svg = d3.select('#bar-chart');
const margin = {top: 50, right: 30, bottom: 50, left: 60};
const width = +svg.attr('width') - margin.left - margin.right;
const height = +svg.attr('height') - margin.top - margin.bottom;
const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

// Tooltip
const tooltip = d3.select("#tooltip");

// Fetch the data
d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(data => {
  const dataset = data.data;

  // Parse date
  const parseTime = d3.timeParse('%Y-%m-%d');
  dataset.forEach(d => {
    d[0] = parseTime(d[0]);
  });

  // Set the scales
  const x = d3.scaleTime()
              .domain(d3.extent(dataset, d => d[0]))
              .range([0, width]);

  const y = d3.scaleLinear()
              .domain([0, d3.max(dataset, d => d[1])])
              .range([height, 0]);

  // Add x-axis
  g.append('g')
    .attr('id', 'x-axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x));

  // Add y-axis
  g.append('g')
    .attr('id', 'y-axis')
    .call(d3.axisLeft(y));

  // Add bars
  g.selectAll('.bar')
    .data(dataset)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d[0]))
    .attr('y', d => y(d[1]))
    .attr('width', width / dataset.length)
    .attr('height', d => height - y(d[1]))
    .attr('data-date', d => d3.timeFormat('%Y-%m-%d')(d[0]))
    .attr('data-gdp', d => d[1])
    .on('mouseover', (event, d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);
      tooltip.html(`Date: ${d3.timeFormat('%Y-%m-%d')(d[0])}<br>GDP: ${d[1]} Billion`)
        .attr('data-date', d3.timeFormat('%Y-%m-%d')(d[0]))
        .style('left', `${event.pageX + 5}px`)
        .style('top', `${event.pageY - 28}px`);
    })
    .on('mouseout', () => {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    });

  // Add title
  svg.append('text')
     .attr('id', 'title')
     .attr('x', width / 2 + margin.left)
     .attr('y', margin.top / 2)
     .attr('text-anchor', 'middle')
     .style('font-size', '24px')
     .text('United States GDP');
});
