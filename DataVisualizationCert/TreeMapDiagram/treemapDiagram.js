// Constants for SVG dimensions
const width = 960;
const height = 500;

// Append SVG element
const svg = d3.select('#treemap')
  .attr('width', width)
  .attr('height', height);

// Load data (Kickstarter Pledges)
d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json')
  .then(data => {
    // Treemap layout
    const treemap = d3.treemap()
      .size([width, height])
      .padding(1);

    // Hierarchy
    const root = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.height - a.height || b.value - a.value);

    treemap(root);

    // Color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Tooltip
    const tooltip = d3.select('#tooltip');

    // Draw tiles
    svg.selectAll('rect')
      .data(root.leaves())
      .enter().append('rect')
        .attr('class', 'tile')
        .attr('data-name', d => d.data.name)
        .attr('data-category', d => d.data.category)
        .attr('data-value', d => d.data.value)
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => color(d.data.category))
        .on('mouseover', handleMouseOver)
        .on('mousemove', handleMouseMove)
        .on('mouseout', handleMouseOut);

    // Legend
    const categories = root.leaves().map(d => d.data.category);
    const uniqueCategories = [...new Set(categories)];

    const legend = d3.select('#legend .legend-items')
      .selectAll('.legend-item')
      .data(uniqueCategories)
      .enter().append('div')
        .attr('class', 'legend-item');

    legend.append('div')
      .attr('class', 'legend-color')
      .style('background-color', d => color(d));

    legend.append('div')
      .text(d => d);

    // Tooltip handling functions
    function handleMouseOver(event, d) {
      const { name, category, value } = d.data;
      tooltip.style('opacity', 0.9);
      tooltip.attr('data-value', value);
      tooltip.html(`<strong>${name}</strong><br>${category}<br>${value}`);
    }

    function handleMouseMove(event) {
      tooltip.style('left', (event.pageX + 10) + 'px')
             .style('top', (event.pageY - 28) + 'px');
    }

    function handleMouseOut() {
      tooltip.style('opacity', 0);
    }
  });
