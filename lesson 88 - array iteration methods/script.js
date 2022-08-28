'use strict';

const arrayNames = ['Ivan', 'Alex', 'Margarita', 'Anastasia'];

const shortNames = arrayNames.filter(name => name.length < 5); // ["Ivan", "Alex"]
const result = arrayNames.map(name => name.toLowerCase()); // ["ivan", "alex", "margarita", "anastasia"]

console.log(shortNames);
console.log(result);

//===================================================================================

const anyArray = [4, 3, 'sfsfd', 'wrew'];

console.log(anyArray.some(item => typeof(item) === 'number')); // true - array contains at least one number element
console.log(anyArray.every(item => typeof(item) === 'number')); // false - array not contains all number elements

//======================================================================================
const anyNumbers = [4, 3, 5, 2, 1, 9, 7];

const reduce = anyNumbers.reduce((sum, curent) => sum + curent); // summ all elements 31
const reduceSum = anyNumbers.reduce((sum, curent) => sum + curent, 3); // summ all elements + start 3 equals 34
const reduceString = anyNumbers.reduce((sum, curent) => `${sum}, ${curent}`); // result equals String 4, 3, 5, 2, 1, 9, 7

console.log(reduce);
console.log(reduceString);
console.log(reduceSum);

//========================================================================================

const obj = {
    ivan: 'person',
    alex: 'person',
    dog: 'animal',
    bird: 'animal'
};

const newArr = Object.entries(obj); // [["ivan", "person"], ["alex", "person"], ["dog", "animal"], ["bird", "animal"]]
const whoIsPerson = newArr
    .filter(item => item[1] === 'person') // ["ivan", "person"], ["alex", "person"]
    .map(item => item[0]); // ["ivan", "alex"]

console.log(newArr);
console.log(whoIsPerson);