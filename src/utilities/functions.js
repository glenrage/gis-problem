function findLongestPrefix1(arr, str) {
  let counter = 0;
  let longestPre = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (
        counter === arr[i].length - 1 &&
        arr[longestPre].length < arr[i].length
      ) {
        longestPre = i;
      }
      if (
        arr[i].toLowerCase().charAt(counter) === str.toLowerCase().charAt(j)
      ) {
        counter++;
      } else {
        counter = 0;
        break;
      }
    }
  }
  return arr[longestPre];
}

function findLongestPrefix2(arr, str) {
  let currIndex = 0;
  let longestIndex = 0;
  let trimmedString = '';
  for (let i = 0; i < arr.length; i++) {
    trimmedString = str.slice(0, arr[i].length);
    if (
      arr[i].localeCompare(trimmedString) === 0 &&
      arr[i].length > longestIndex
    ) {
      currIndex = arr[i];
      longestIndex = arr[i].length;
    }
  }
  return currIndex;
}

(module.exports = findLongestPrefix1), findLongestPrefix2;
