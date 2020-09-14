// tempColoring is a helper function that assigns coloring to the cells and legend based on selected color palette
export default function tempColoring(currTemp, colorPalette, legendArr) {
  if (currTemp <= legendArr[0]) {
    return colorPalette.color1;
  } else if (currTemp > legendArr[0] && currTemp <= legendArr[1]) {
    return colorPalette.color2;
  } else if (currTemp > legendArr[1] && currTemp <= legendArr[2]) {
    return colorPalette.color3;
  } else if (currTemp > legendArr[2] && currTemp <= legendArr[3]) {
    return colorPalette.color4;
  } else if (currTemp > legendArr[3] && currTemp <= legendArr[4]) {
    return colorPalette.color5;
  } else if (currTemp > legendArr[4] && currTemp <= legendArr[5]) {
    return colorPalette.color6;
  } else if (currTemp > legendArr[5] && currTemp <= legendArr[6]) {
    return colorPalette.color7;
  } else if (currTemp > legendArr[6] && currTemp <= legendArr[7]) {
    return colorPalette.color8;
  } else if (currTemp > legendArr[7] && currTemp <= legendArr[8]) {
    return colorPalette.color9;
  } else if (currTemp > legendArr[8] && currTemp <= legendArr[9]) {
    return colorPalette.color10;
  } else {
    return colorPalette.color11;
  }
}
