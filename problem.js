export const findLongestPrefix1 = (arr, str) => {
  let counter = 0;
  let longestPre = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (counter === arr[i].length) longestPre = i;
      if (
        arr[i].toLowerCase().charAt(counter) === str.toLowerCase().charAt(j)
      ) {
        counter++;
      }
    }
  }
  return arr[longestPre];
};

export const findLongestPrefix2 = (arr, str) => {
  let longestPrefix = 0;
  let longestIndex = 0;
  let trimmedString = '';
  for (let i = 0; i < arr.length; i++) {
    trimmedString = str.slice(0, arr[i].length);
    if (
      arr[i].localeCompare(trimmedString) === 0 &&
      arr[i].length > longestIndex
    ) {
      longestPrefix = arr[i];
      longestIndex = arr[i].length;
    }
  }
  return longestPrefix;
};

function compareStrings(str1, str2) {
  return str1.toLowerCase() < str2.toLowerCase() ? -1 : +(str1 > str2);
}

export const findLongestPrefix3 = (arr, str) => {
  let longestPrefix;
  let longestIndex = 0;
  arr.forEach(elm => {
    const currLength = elm.length;
    const trimmedString = str.slice(0, currLength);
    const result = compareStrings(elm, trimmedString);
    if (result === 0 && currLength > longestIndex) {
      longestPrefix = elm;
      longestIndex = currLength;
    }
  });
  return longestPrefix;
};
