/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advBlocks = document.querySelector('.promo__adv'),
    genreMovie = document.querySelector('.promo__genre'),
    sortMovieDB = movieDB.movies.sort(),
    listMovies = document.querySelectorAll('.promo__interactive-item'),
    promoContent = document.querySelector('.promo__content');

advBlocks.remove();
promoContent.style.width = '100%';

genreMovie.textContent = 'драма';

document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

listMovies.forEach((items, i) => {
    items.textContent = `${i+1} ${sortMovieDB[i]}`;
});