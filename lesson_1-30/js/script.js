"use strict";

let filmsCount = 3,
    lastViewedFilms,
    filmGrade;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        personalMovieDB.count = personalMovieDB.count;
    },
    rememberMyFilms: () => {
        let i = 0;
        while (i < filmsCount) {
            lastViewedFilms = prompt("Один из последних просмотренных фильмов?", "").trim();
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
    },
    detectPersinalLevel: () => {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
            console.log('You have seen quite a few movies!!!');
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            console.log('You are a classical spectator)))');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a cinephile.)))');
        } else {
            console.log('Error!!!!');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        let i = 1;
        while (i <= 3) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`, "");

            if (genre === '' || genre == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            i++;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toogleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};