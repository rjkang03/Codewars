// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) return 0;
    let sum = 0;
    array.forEach(elem => sum += elem);
    sum /= array.length;
    return sum;
  }

// REFACTORED SOLUTION  

function findAverage(array) {
    return array.length > 0? array.reduce((accum, curr) => accum + curr, 0) / array.length : 0 
  }