/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против sfsdsf"
        ]
    };

    const listMovies = document.querySelector('.promo__interactive-list'),
        listItems = document.querySelectorAll('.promo__interactive-item'),
        formAddMovies = document.querySelector('form.add'),
        inputAddMovies = formAddMovies.querySelector('.adding__input'),
        checkboxAddForm = formAddMovies.querySelector('[type="checkbox"]');

    function sortMoviesList() {
        movieDB.movies.sort();
    }

    function addMovies() {
        formAddMovies.addEventListener('submit', (e) => {
            e.preventDefault();
            const newFilm = inputAddMovies.value,
                favorite = checkboxAddForm.checked;

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            if (newFilm) {
                movieDB.movies.push(newFilm);
                sortMoviesList();
                createMovieList(movieDB.movies, listMovies);
            }



            e.target.reset();
        });
    }

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            if (film.length > 21) {
                film = `${film.substring(0, 22)}...`;
            }

            parent.innerHTML += `
              <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
              </li>`;

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(films, parent);
                });
            });
        });
    }


    addMovies();
    sortMoviesList();
    createMovieList(movieDB.movies, listMovies);
});