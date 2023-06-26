// The easiest way is to use built in method. But you could also do it in a dozen custom ways if needed.

let str = 'abcdef';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Outputs: 'fedcba'