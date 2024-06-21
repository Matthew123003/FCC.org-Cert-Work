// Constants for SVG dimensions
const width = 960;
const height = 600;

// Append SVG element
const svg = d3.select('#choropleth-map')
  .attr('width', width)
  .attr('height', height);

// Load US Education Data and US County Data
Promise.all([
  d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json'),
  d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json')
]).then(([countyData, educationData]) => {

  // Map education data to fips codes
  const educationMap = {};
  educationData.forEach(d => {
    educationMap[d.fips] = d;
  });

  // Draw counties
  svg.selectAll('path')
    .data(topojson.feature(countyData, countyData.objects.counties).features)
    .enter().append('path')
    .attr('class', 'county')
    .attr('d', d3.geoPath())
    .attr('fill', d => {
      const education = educationMap[d.id];
      return getColor(education.bachelorsOrHigher);
    })
    .attr('data-fips', d => d.id)
    .attr('data-education', d => {
      const education = educationMap[d.id];
      return education ? education.bachelorsOrHigher : 0;
    })
    .on('mouseover', handleMouseOver)
    .on('mousemove', handleMouseMove)
    .on('mouseout', handleMouseOut);
});

// Function to get color based on percentage
function getColor(percentage) {
  if (percentage >= 80) return '#006d2c';
  if (percentage >= 60) return '#31a354';
  if (percentage >= 40) return '#74c476';
  if (percentage >= 20) return '#bae4b3';
  return '#edf8e9';
}

// Tooltip handling functions
function handleMouseOver(event, d) {
  const tooltip = d3.select('#tooltip');
  tooltip.style('opacity', 0.9);
  tooltip.attr('data-education', d3.select(this).attr('data-education'));
}

function handleMouseMove(event) {
  const tooltip = d3.select('#tooltip');
  tooltip.style('left', (event.pageX + 10) + 'px')
         .style('top', (event.pageY - 28) + 'px');
}

function handleMouseOut() {
  const tooltip = d3.select('#tooltip');
  tooltip.style('opacity', 0);
}
