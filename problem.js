const findLongestPrefix1 = (arr, str) => {
  let counter = 0;
  let longestPre;
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

// This was my first attempt at writing the algo. It was a brute force method, and is very expensive in time complexity to compare every element in each string. The big O time complexity is O(n2). There is no situation where I would use this solution in production code unless I Was trying to get fired.

const findLongestPrefix2 = (arr, str) => {
  let longestPrefix;
  let longestIndex = 0;
  let trimmedString = '';
  for (let i = 0; i < arr.length; i++) {
    trimmedString = str.toLowerCase().slice(0, arr[i].length);
    if (
      arr[i].toLowerCase().localeCompare(trimmedString) === 0 &&
      arr[i].length > longestIndex
    ) {
      longestPrefix = arr[i];
      longestIndex = arr[i].length;
    }
  }
  return longestPrefix;
};
//For my second solution I thought of trimming each input string and comparing the length to each string element in the array and comparing if it is an exact match. I used the localeCompare function to compare each string for exact match. Big O time complexity is O(n * k) where k is a constant of input string, but O(n) if you ignore constants.

const findLongestPrefix3 = (arr, str) => {
  let longestPrefix;
  let longestIndex = 0;

  function compareStrings(str1, str2) {
    return str1 < str2 ? -1 : +(str1 > str2);
  }

  arr.forEach(elm => {
    const currLength = elm.length;
    const trimmedString = str.toLowerCase().slice(0, currLength);
    const result = compareStrings(elm.toLowerCase(), trimmedString);
    if (result === 0 && currLength > longestIndex) {
      longestPrefix = elm;
      longestIndex = currLength;
    }
  });
  return longestPrefix;
};
//My third is my final solution after refactoring and making my own helper compare function. Using localeCompare impacts performance as seen on jsperf.com, and writing my own comparison is much faster. Time complexity is O(n)

module.exports.func1 = findLongestPrefix1;
module.exports.func2 = findLongestPrefix2;
module.exports.func3 = findLongestPrefix3;
