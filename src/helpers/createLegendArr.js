/* createLegendArr is a helper function that is used to divide calculated 
temperatures and to create approximately equal coloring groups */
export default function createLegendArr(minTemp, numOfSections, section) {
  const legendArr = [];
  let temp = minTemp;
  for (let i = 0; i < numOfSections; i++) {
    temp += section;
    legendArr.push(Math.round(temp * 10) / 10);
  }
  return legendArr;
}
