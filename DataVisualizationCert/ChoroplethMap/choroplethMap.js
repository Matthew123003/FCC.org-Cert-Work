document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    fetch(
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
    ).then((response) => response.json()),
    fetch(
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
    ).then((response) => response.json()),
  ]).then(([countyData, educationData]) => {
    createChoroplethMap(countyData, educationData);
  });

  function createChoroplethMap(countyData, educationData) {
    const w = 960;
    const h = 600;

    const svg = d3
      .select("#map")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    const colorScale = d3
      .scaleThreshold()
      .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
      .range(d3.schemeBlues[9]);

    const tooltip = d3
      .select("#map")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);

    svg
      .selectAll("path")
      .data(topojson.feature(countyData, countyData.objects.counties).features)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("data-fips", (d) => d.id)
      .attr("data-education", (d) => {
        const county = educationData.find((item) => item.fips === d.id);
        return county ? county.bachelorsOrHigher : 0;
      })
      .attr("fill", (d) => {
        const county = educationData.find((item) => item.fips === d.id);
        return county ? colorScale(county.bachelorsOrHigher) : colorScale(0);
      })
      .attr("d", d3.geoPath())
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(() => {
            const county = educationData.find((item) => item.fips === d.id);
            return county
              ? `${county.area_name}, ${county.state}: ${county.bachelorsOrHigher}%`
              : "Data not available";
          })
          .attr("data-education", () => {
            const county = educationData.find((item) => item.fips === d.id);
            return county ? county.bachelorsOrHigher : 0;
          })
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(300).style("opacity", 0);
      });

    const legendColors = colorScale.range().map((color) => {
      const d = colorScale.invertExtent(color);
      if (d[0] === null) d[0] = 0;
      if (d[1] === null) d[1] = 100;
      return {
        color,
        value: d[0],
      };
    });

    const legend = d3.select("#legend");

    legend
      .selectAll("div")
      .data(legendColors)
      .enter()
      .append("div")
      .attr("class", "legend-item")
      .html((d) => `${Math.round(d.value)}%`)
      .style("background-color", (d) => d.color);
  }
});
