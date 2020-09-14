import * as d3 from "d3";

import createLegendArr from "./createLegendArr";
import tempColoring from "./tempColoring";

export default function render(dataset, baseTemperature, ref, width, height) {
  const svg = d3.select(ref.current);

  const xValue = d => d["year"];
  const yValue = d => d["month"] - 1;
  const monthStr = d => d["monthStr"];
  const variance = d => Math.round(d["variance"] * 10) / 10;
  const currTemp = d => Math.round((baseTemperature + d["variance"]) * 10) / 10;

  // Initiate the svg sizing for the visualization
  const margin = { top: 100, right: 60, bottom: 150, left: 100 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate and initiate relevant parameters
  const minYear = d3.min(dataset, xValue);
  const maxYear = d3.max(dataset, xValue);
  const yearRange = maxYear - minYear;

  const minMonth = d3.min(dataset, yValue);
  const maxMonth = d3.max(dataset, yValue);

  const cellWidth = innerWidth / yearRange;
  const cellHeight = innerHeight / 12;

  // Create and position axes text labels and the title
  const xAxisLabelText = "Years";
  const xAxisLabelXPos = innerWidth / 2;
  const xAxisLabelYPos = 40;

  const yAxisLabelText = "Months";
  const yAxisLabelXPos = -innerHeight / 2;
  const yAxisLabelYPos = -70;

  const titleText = "Monthly Global Land-Surface Temperature";
  const titleXAxisPos = width / 2;
  const titleYAxisPos = 40;

  const subtitleText = `${minYear} - ${maxYear}: base temperature ${baseTemperature}℃`;
  const subtitleYAxisPos = titleYAxisPos + 22;

  // Define variables used in the legend section
  const numOfSections = 11;
  const minTemp = d3.min(dataset, currTemp);
  const maxTemp = d3.max(dataset, currTemp);
  const section = Math.round(((maxTemp - minTemp) / numOfSections) * 10) / 10;
  const legendArr = createLegendArr(minTemp, numOfSections, section);
  const legendWidth = 300;
  const legendBarWidth = legendWidth / numOfSections;

  const colorPalette = {
    color1: "rgb(49, 54, 149)",
    color2: "rgb(69, 117, 180)",
    color3: "rgb(116, 173, 209)",
    color4: "rgb(171, 217, 233)",
    color5: "rgb(224, 243, 248)",
    color6: "rgb(255, 255, 191)",
    color7: "rgb(254, 224, 144)",
    color8: "rgb(253, 174, 97)",
    color9: "rgb(244, 109, 67)",
    color10: "rgb(215, 48, 39)",
    color11: "rgb(165, 0, 38)"
  }; // Colors will be assigned correspondingly to the increase in temp (1 - coldest, 11 - warmest)

  // Initiate a heat map
  const heatmap = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Establish a scale
  const xScale = d3
    .scaleTime()
    .domain([minYear - 1, maxYear])
    .range([0, innerWidth]);

  const yScale = d3
    .scaleTime()
    .domain([minMonth, maxMonth])
    .range([0, innerHeight]);

  // Create axes
  const xAxis = d3
    .axisBottom(xScale)
    .tickFormat(d => d3.timeFormat("%Y")(new Date(0).setFullYear(d)))
    .tickSizeOuter(0);
  const yAxis = d3
    .axisLeft(yScale)
    .tickFormat(d => d3.timeFormat("%B")(new Date(0).setMonth(d)));

  const xAxisG = heatmap
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${innerHeight + cellHeight / 2})`)
    .call(xAxis);

  xAxisG
    .append("text")
    .attr("id", "xAxis-label")
    .attr("x", xAxisLabelXPos)
    .attr("y", xAxisLabelYPos)
    .text(xAxisLabelText);

  const yAxisG = heatmap
    .append("g")
    .attr("id", "y-axis")
    .call(yAxis)
    .selectAll(".domain")
    .remove();

  yAxisG
    .append("text")
    .attr("id", "yAxis-label")
    .attr("x", yAxisLabelXPos)
    .attr("y", yAxisLabelYPos)
    .attr("transform", "rotate(-90)")
    .text(yAxisLabelText);

  const titleSection = svg.append("g").attr("text-anchor", "middle");

  titleSection
    .append("text")
    .attr("id", "title")
    .attr("x", titleXAxisPos)
    .attr("y", titleYAxisPos)
    .text(titleText);

  titleSection
    .append("text")
    .attr("id", "description")
    .attr("x", titleXAxisPos)
    .attr("y", subtitleYAxisPos)
    .text(subtitleText);

  let tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);

  // Append cells to the heatmap
  heatmap
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", d => xScale(xValue(d)))
    .attr("y", d => yScale(yValue(d) - 0.5))
    .attr("width", cellWidth)
    .attr("height", cellHeight)
    .attr("fill", d => tempColoring(currTemp(d), colorPalette, legendArr)) //fill with palette accordingly
    .attr("class", "cell")
    .attr("data-year", d => xValue(d))
    .attr("data-month", d => yValue(d))
    .attr("data-temp", d => currTemp(d))
    .on("mouseover", d => {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9);
      tooltip
        .html(
          `${xValue(d)} - ${monthStr(d)}
                    </br>${currTemp(d)}°C
                    </br>${variance(d)}°C`
        )
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px")
        .attr("data-year", xValue(d));
    })
    .on("mouseout", d => {
      tooltip
        .transition()
        .duration(500)
        .style("opacity", 0);
    });

  // Add the legend to the visualization
  const legend = svg
    .append("g")
    .attr("id", "legend")
    .attr("transform", `translate(${margin.left}, ${margin.top + 80})`);

  const tempScale = d3
    .scaleLinear()
    .domain([minTemp, maxTemp])
    .range([0, legendWidth]);

  const legendXAxis = d3
    .axisBottom(tempScale)
    .tickValues(legendArr)
    .tickFormat(d3.format(".1f"))
    .tickSizeOuter(0);

  legend
    .append("g")
    .attr("id", "legend-x-axis")
    .attr("transform", `translate(0, ${innerHeight + 10})`)
    .call(legendXAxis);

  legend
    .selectAll("rect")
    .data(legendArr)
    .enter()
    .append("rect")
    .attr("class", "legend-rect")
    .attr("x", (d, i) => i * legendBarWidth)
    .attr("transform", `translate(0, ${innerHeight - 10})`)
    .attr("width", legendBarWidth)
    .attr("height", 20)
    .attr("fill", d => tempColoring(d, colorPalette, legendArr)); //fill with palette accordingly
}

export { render };
