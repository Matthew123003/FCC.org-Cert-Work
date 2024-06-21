const data = [
    { "Time": "36:50", "Place": 1, "Seconds": 2210, "Name": "Marco Pantani", "Year": 1995, "Nationality": "ITA", "Doping": "Alleged drug use during 1995 due to high hematocrit levels", "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use" },
    { "Time": "36:55", "Place": 2, "Seconds": 2215, "Name": "Marco Pantani", "Year": 1997, "Nationality": "ITA", "Doping": "Alleged drug use during 1997 due to high hermatocrit levels", "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use" },
    { "Time": "37:15", "Place": 3, "Seconds": 2235, "Name": "Marco Pantani", "Year": 1994, "Nationality": "ITA", "Doping": "Alleged drug use during 1994 due to high hermatocrit levels", "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use" },
    { "Time": "37:36", "Place": 4, "Seconds": 2256, "Name": "Lance Armstrong", "Year": 2004, "Nationality": "USA", "Doping": "2004 Tour de France title stripped by UCI in 2012", "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations" },
    { "Time": "37:42", "Place": 5, "Seconds": 2262, "Name": "Jan Ullrich", "Year": 1997, "Nationality": "GER", "Doping": "Confessed later in his career to doping", "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case" },
    { "Time": "38:05", "Place": 6, "Seconds": 2285, "Name": "Lance Armstrong", "Year": 2001, "Nationality": "USA", "Doping": "2001 Tour de France title stripped by UCI in 2012", "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations" },
    { "Time": "38:14", "Place": 7, "Seconds": 2294, "Name": "Miguel Indurain", "Year": 1995, "Nationality": "ESP", "Doping": "1994 Failed test for salbutemol, not a banned drug at that time", "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html" },
    { "Time": "38:14", "Place": 8, "Seconds": 2294, "Name": "Alex Zülle", "Year": 1995, "Nationality": "SUI", "Doping": "Confessed in 1998 to taking EPO", "URL": "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair" },
    { "Time": "38:16", "Place": 9, "Seconds": 2296, "Name": "Bjarne Riis", "Year": 1995, "Nationality": "DEN", "Doping": "Alleged drug use during 1995 due to high hermatrocite levels", "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations" },
    { "Time": "38:22", "Place": 10, "Seconds": 2302, "Name": "Richard Virenque", "Year": 1997, "Nationality": "FRA", "Doping": "In 2000 confessed to doping during his career", "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair" },
    { "Time": "38:36", "Place": 11, "Seconds": 2316, "Name": "Floyd Landis", "Year": 2006, "Nationality": "USA", "Doping": "Stripped of 2006 Tour de France title", "URL": "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case" },
    { "Time": "38:36", "Place": 12, "Seconds": 2316, "Name": "Andreas Klöden", "Year": 2006, "Nationality": "GER", "Doping": "Alleged use of illegal blood transfusions in 2006", "URL": "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations" },
    { "Time": "38:40", "Place": 13, "Seconds": 2320, "Name": "Jan Ullrich", "Year": 2004, "Nationality": "GER", "Doping": "Confessed later in his career to doping", "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case" },
    { "Time": "38:44", "Place": 14, "Seconds": 2324, "Name": "Laurent Madouas", "Year": 1995, "Nationality": "FRA", "Doping": "Tested positive for Salbutemol in 1994, suspended for 1 month", "URL": "http://www.dopeology.org/incidents/Madouas-positive/" },
    { "Time": "38:55", "Place": 15, "Seconds": 2335, "Name": "Richard Virenque", "Year": 1994, "Nationality": "FRA", "Doping": "In 2000 confessed to doping during his career", "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair" },
    { "Time": "39:01", "Place": 16, "Seconds": 2341, "Name": "Carlos Sastre", "Year": 2006, "Nationality": "ESP", "Doping": "", "URL": "" },
    { "Time": "39:09", "Place": 17, "Seconds": 2349, "Name": "Iban Mayo", "Year": 2003, "Nationality": "ESP", "Doping": "Failed doping test in 2007 Tour de France", "URL": "https://en.wikipedia.org/wiki/Iban_Mayo" },
    { "Time": "39:12", "Place": 18, "Seconds": 2352, "Name": "Andreas Klöden", "Year": 2004, "Nationality": "GER", "Doping": "Alleged doping during 2006 Tour de France", "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case" },
    { "Time": "39:14", "Place": 19, "Seconds": 2354, "Name": "Jose Azevedo", "Year": 2004, "Nationality": "POR", "Doping": "Implicated in the Operación Puerto doping case", "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case" },
    { "Time": "39:15", "Place": 20, "Seconds": 2355, "Name": "Levi Leipheimer", "Year": 2005, "Nationality": "USA", "Doping": "Testified in 2012 to doping during his career", "URL": "https://en.wikipedia.org/wiki/Levi_Leipheimer#Doping" }
  ];
  
  const margin = { top: 60, right: 30, bottom: 60, left: 60 };
  const width = 800 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  
  const svg = d3.select("#scatter-plot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  
  const x = d3.scaleLinear()
    .domain([d3.min(data, d => d.Year) - 1, d3.max(data, d => d.Year) + 1])
    .range([0, width]);
  
  const y = d3.scaleLinear()
    .domain([d3.min(data, d => d.Seconds), d3.max(data, d => d.Seconds)])
    .range([0, height]);
  
  svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));
  
  svg.append("g")
    .attr("id", "y-axis")
    .call(d3.axisLeft(y).tickFormat(d => {
      const date = new Date(0);
      date.setSeconds(d);
      return d3.timeFormat("%M:%S")(date);
    }));
  
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .attr("id", "tooltip")
    .style("opacity", 0);
  
  svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.Year))
    .attr("cy", d => y(d.Seconds))
    .attr("r", 5)
    .attr("data-xvalue", d => d.Year)
    .attr("data-yvalue", d => new Date(d.Seconds * 1000))
    .attr("fill", d => d.Doping ? "#ff7f0e" : "#1f77b4")
    .on("mouseover", function(event, d) {
      tooltip.transition().duration(200).style("opacity", .9);
      tooltip.html(`${d.Name}: ${d.Nationality}<br>Year: ${d.Year}, Time: ${d.Time}<br>${d.Doping ? d.Doping : ""}`)
        .attr("data-year", d.Year)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
  
  svg.append("text")
    .attr("id", "title")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "24px")
    .style("text-decoration", "underline")
    .text("Doping in Professional Bicycle Racing");
  
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .attr("text-anchor", "middle")
    .text("Year");
  
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 20)
    .attr("text-anchor", "middle")
    .text("Time in Minutes");
  