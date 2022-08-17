"use strict";

// ===================== Lesson 32 Objects, destructuring object ======================

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const { border, bg } = options.colors; // destructuring object
// console.log(border);

// console.log(options.name);
// delete options.name; // deleted property object
// console.log(options.colors.border); or // console.log(options["colors"]["border"]);

// for (let key in options) {
//     if (typeof options[key] === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} have value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} have value ${options[key]}`);

//     }
// }

// console.log(Object.keys(options).length); // get the number of elements in an object

// ===================== Lesson 32 Array, pseudo-array ======================

// const arr = [1, 32, 3, 4, 6, 7];

// arr.sort();                                    // sort array as string
// console.log(arr);

// function compareNum(a, b) {                  //sort array as number
//     return a - b;
// }

// arr.sort(compareNum);
// console.log(arr); 


// arr.pop(); // deleted last element
// arr.push(10); // add last element

// for (let i of arr) {
//     console.log(i);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`Item value #${i} equals ${item} in array ${arr}`);
// });


// console.log(arr);

// const str = prompt("", "");
// const products = str.split(" "); // creating an array from a string with devider " "

// console.log(products.join('; ')); // creating a string from array product with devider '; ' 

//console.log(products);

// ======================== copy Objects ==========================

// const originalObj = {
//     a: 10,
//     b: 4,
//     c: 7,
//     d: {
//         x: 20,
//         y: 30
//     }
// };

// function copyObj(obj) {
//     const objCopy = {};

//     for (let key in originalObj) {
//         objCopy[key] = originalObj[key];
//     }
//     return objCopy;
// }

// // const newObj = copyObj(originalObj);
// // newObj.a = 11;
// // console.log(newObj);
// console.log(originalObj);

// const addObj = {
//     q: 1,
//     w: 2
// };
// const add = Object.assign({}, addObj); // new copy Object

//====================== Copy Array, SpreadOperator =========================

// const oldArr = [1, 2, 4];
// const newArr = oldArr.slice();

// const video = ['youtube', 'twitter', 'facebook'],
//     blogs = ['wp', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk'];

// console.log(internet);
// console.log(...video); // new String

//================================ Closure - lexical environment ====================================