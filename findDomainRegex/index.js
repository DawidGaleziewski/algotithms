const url = 'https://28i95z28x7-thbdq8.pro/index.php';
const domainName = url
  .match(/(https?:\/\/)?(www\.)?.*(?!=\.)/)[0]
  .replace(/https?:\/\//, '')
  .replace('www.', '')
  .replace(/\..*/, '');

// Learned that
// .match method returns a array and is a great tool for finding a substring
// you can add group of optional characters by (groupOfChars)?
// what is lookahead in regex:
// https://www.stefanjudis.com/today-i-learned/the-complicated-syntax-of-lookaheads-in-javascript-regular-expressions/
// To remve all characters after something we can use:
Array.replace('/.*/', '');
// Better understanding on how to use wildcard and that in most cases i should use /.*/ to catch all the characters
