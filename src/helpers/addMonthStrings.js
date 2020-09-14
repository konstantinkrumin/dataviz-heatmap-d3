// addMonthStrings converts month integer into a string and adds it to the dataset
export default function addMonthStrings(dataset) {
  for (let i = 0; i < dataset.length; i++) {
    let newPropName = "monthStr";
    switch (dataset[i]["month"]) {
      case 1:
        dataset[i][newPropName] = "January";
        break;
      case 2:
        dataset[i][newPropName] = "February";
        break;
      case 3:
        dataset[i][newPropName] = "March";
        break;
      case 4:
        dataset[i][newPropName] = "April";
        break;
      case 5:
        dataset[i][newPropName] = "May";
        break;
      case 6:
        dataset[i][newPropName] = "June";
        break;
      case 7:
        dataset[i][newPropName] = "July";
        break;
      case 8:
        dataset[i][newPropName] = "August";
        break;
      case 9:
        dataset[i][newPropName] = "September";
        break;
      case 10:
        dataset[i][newPropName] = "October";
        break;
      case 11:
        dataset[i][newPropName] = "November";
        break;
      case 12:
        dataset[i][newPropName] = "December";
        break;
      default:
        break;
    }
  }
  return dataset;
}
