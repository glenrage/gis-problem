// For this coding question I am looking for you to create an implementation that finds the longest prefix to an input string.
//
// Although our work is largely javascript based, feel free to use any language you are comfortable with.
//
// For example, if we had these 3 strings:
//
// abc
// abcd
// abcdde
//
// and this input string:
// abcdd
//
// Which of the top 3 is the longest prefix to the string abcdd?
//
// The answer is "abcd", because "abc" is a prefix but it is shorter than abcd, and abcdde is not a prefix to abcdd.

//loop through array of words
//for every word in array, loop through input string
//compare each element of input string to each element of words array
//when string index of inputstring stops matching array index, slice array string and insert to result string
//return result string

const prefixList = ['inn', 'in', 'int', 'integ', 'ind', 'init'];
const inputString = 'integralGIS';

function findLongestPrefix(arr, str) {
  let result = '';
  for (var i = 0; i < arr.length; i++) {
    let curr = arr[0][i];
    console.log(curr);
    for (var j = 0; j < str.length; j++) {
      let char = str[j];
      console.log('char ', char);
    }
  }
  console.log();
}

findLongestPrefix(prefixList, inputString);

module.exports = findLongestPrefix;
