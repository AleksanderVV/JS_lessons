'use strict';

const films = [{
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {

    return films.filter(item => item.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    let newArray = [];
    arr.forEach((value, index) => {
        newArray[index] = Object.entries(value);
    });
    const result = newArray
        .map(item => item[0][1])
        .reduce((sum, curent) => `${sum}, ${curent}`);
    return result;
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    arr.forEach((value, index) => {
        value.id = index;
    });
    return arr;
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.id !== '');
}

console.log(checkFilms(tranformedArray));