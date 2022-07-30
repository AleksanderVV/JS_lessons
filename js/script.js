"use strict";

/* let storeName = "Zakaz.UA";
const storeDescription = {
    budget: 10000,
    employees: ['Alex', 'Evgen', 'Elena'],
    products: { audi: 10000, bmw: 15000 },
    open: true
};

console.log(`My store - ${storeName}`);
console.log(`My store administrator is ${storeDescription.employees[1]}`); */


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const oneLastViewedFilms = prompt("Один из последних просмотренных фильмов?", ""),
    firstFilmGrade = prompt("На сколько оцените его?", ""),
    twoLastViewedFilms = prompt("Один из последних просмотренных фильмов?", ""),
    secondFilmGrade = prompt("На сколько оцените его?", "");

personalMovieDB.movies[oneLastViewedFilms] = firstFilmGrade;
personalMovieDB.movies[twoLastViewedFilms] = secondFilmGrade;


console.log(personalMovieDB);