export const mixColors = ([colorOne, colorTwo], mixRatio = [0.5, 0.5, 0.5]) => {
  let isMixRatioArray = false;
  if (Array.isArray(mixRatio)) isMixRatioArray = true;
  const colorOneRgbArray = rgbStringToArray(colorOne);
  const colorTwoRgbArray = rgbStringToArray(colorTwo);
  const mixedColorsRgbArray = [undefined, undefined, undefined];
  // Mixing colors, by RBG properties & respective ratios:
  for (let i = 0; i < 3; i += 1) {
    mixedColorsRgbArray[i] = linearInterpolation(
      [0, Number(colorOneRgbArray[i])],
      [1, Number(colorTwoRgbArray[i])],
      [isMixRatioArray ? mixRatio[i] : mixRatio, undefined]
    );
  }
  return arrayToRgbString(mixedColorsRgbArray);
};

const rgbStringToArray = string => String(string).replace('rgb(', '').replace(')', '').split(',');

const arrayToRgbString = ([A, B, C]) => `rgb(${A}, ${B}, ${C})`;

/**
 * Linear interpolation function, returns the desired value.
 * @param {[number, number]} param0 First set of known values. 
 * @param {[number, number]} param1 Second set of known values.
 * @param {[number, undefined] | [undefined, number]} param2 Set of desired values, at least one has to be known, usually `secondDesiredValue`.
 */
const linearInterpolation = (
  [firstValueA, secondValueA], // First set of known values.
  [firstValueB, secondValueB], // Second set of known values.
  [firstDesiredValue, secondDesiredValue = undefined] // Set of desired values, at least one has to be known.
) => {
  if (firstDesiredValue) {
    return (((secondValueB - secondValueA) / (firstValueB - firstValueA)) * (firstDesiredValue - firstValueA) + secondValueA) || 0;
  }
  return (((secondDesiredValue - secondValueA) / (secondValueB - secondValueA)) * (firstValueB - firstValueA) + firstValueA) || 0;
};


/**
 * INTERPOLATION EXAMPLE:
 * ----------------------
 * rgb(0, 255, 96)
 * rgb(0, 255, 255)
 * rgb(?, ?, ?)
 * 
 * Interpolation:
 * A)       0 -> 96
 * B)       1 -> 255
 * DESIRED) 0.5 -> x
 * 
 * 255 - 96    x - 96
 * -------- = --------
 * 001 -  0    0.5 - 0
 * 
 *      255 - 96
 * x = (----------- * 0.5) + 96 = 175.5
 *          1
 * 
 * 
 * A)       0 -> 96
 * DESIRED) X -> 175.5
 * B)       1 -> 255
 * 
 * 
 * 255 - 96    175.5 - 96
 * -------- = ------------
 * 001 -  0    X - 0
 * 
 *      175.5 - 96
 * x = (----------- * (001 -  0)) + 0 = 0.5
 *       255 - 96
 */