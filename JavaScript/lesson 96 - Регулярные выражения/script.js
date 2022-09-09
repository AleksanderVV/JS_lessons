'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f;

// const ans = prompt("Enter your name");

// const reg = /\d/g;
// // console.log(reg.test(ans)); // check existence 'n' - true or false
// console.log(ans.match(reg));

// Class
// \d - numbers
// \w - letter
// \s - spaces
// \D - not number
// \W - not letter
// \S - not spaces

// Flags
// i - не учитываем регистр
// g - найти сразу несколько вложений
// m - многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));
// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*'));  //change all simbols to '*'

// console.log('12-121-12'.replace(/-/g, ':')); //change all '-' to ':'

const str = 'My name is A1e3';
console.log(str.match(/\w\d\w\d/i));