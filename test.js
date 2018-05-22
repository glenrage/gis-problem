const expect = require('chai').expect;
const functions = require('./problem.js');

describe('Prefix function 1', () => {
  let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
  let testStr = 'abceeee';
  it('should match the longest common prefix', () => {
    expect(functions.func1(testArr, testStr)).to.equal('abc');
  });
  it('should match regardless of upper or lowercase', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'AbCeEEeEEee';
    expect(functions.func1(testArr, testStr)).to.equal('abc');
  });
  it('should return undefined if no matches found ', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'LOLOLOLOL';
    expect(functions.func1(testArr, testStr)).to.equal(undefined);
  });
});

describe('Prefix function 2', () => {
  let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
  let testStr = 'abceeee';
  it('should match the longest common prefix', () => {
    expect(functions.func2(testArr, testStr)).to.equal('abc');
  });
  it('should match the longest common prefix 2', () => {
    let testArr = ['abc', 'abcd', 'abcdde', 'a'];
    let testStr = 'abcdd';
    expect(functions.func3(testArr, testStr)).to.equal('abcd');
  });
  it('should match regardless of upper or lowercase', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'AbCeEEeEEee';
    expect(functions.func2(testArr, testStr)).to.equal('abc');
  });
  it('should return undefined if no matches found ', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'LOLLOLOLOLOLOL';
    expect(functions.func2(testArr, testStr)).to.equal(undefined);
  });
});

describe('Prefix function 3', () => {
  it('should match the longest common prefix', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'abceeee';
    expect(functions.func3(testArr, testStr)).to.equal('abc');
  });
  it('should match the longest common prefix ', () => {
    let testArr = ['abc', 'abcd', 'abcdde', 'a'];
    let testStr = 'abcdd';
    expect(functions.func3(testArr, testStr)).to.equal('abcd');
  });
  it('should match regardless of upper or lowercase', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'AbCeee';
    expect(functions.func3(testArr, testStr)).to.equal('abc');
  });
  it('should return undefined if no matches found ', () => {
    let testArr = ['abc', 'abcd', 'abcdd', 'abcddd', 'a'];
    let testStr = 'LOLOLOL';
    expect(functions.func3(testArr, testStr)).to.equal(undefined);
  });
  it('should return an empty string  if an empty string is passed in ', () => {
    let testArr = ['', ''];
    let testStr = '';
    expect(functions.func3(testArr, testStr)).to.equal(undefined);
  });
});
