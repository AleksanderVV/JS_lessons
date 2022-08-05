"use strict";

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmsCount = 3,
    lastViewedFilms,
    filmGrade;


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {
    let i = 0;
    while (i < filmsCount) {
        lastViewedFilms = prompt("Один из последних просмотренных фильмов?", "");
        filmGrade = prompt("На сколько оцените его?", "");

        if (lastViewedFilms === "" || filmGrade === "" || lastViewedFilms === null || filmGrade === null || lastViewedFilms.length > 50) {
            console.log('You do not enter empty and more 50 string');
            i--;
        } else {
            if (lastViewedFilms[i] === lastViewedFilms[i + 1]) {
                console.log('Films repeat!!!');
                i--;
            } else {
                personalMovieDB.movies[lastViewedFilms] = filmGrade;
            }
        }
        i++;
    }
}

function detectPersinalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
        console.log('You have seen quite a few movies!!!');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        console.log('You are a classical spectator)))');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a cinephile.)))');
    } else {
        console.log('Error!!!!');
    }
}

function writeYourGenres() {
    let i = 1;
    while (i <= 3) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, "");
        i++;
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

start();
rememberMyFilms();
detectPersinalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);