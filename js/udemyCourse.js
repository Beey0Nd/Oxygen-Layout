"use strict";

setTimeout(() => {
    udemyCourseApp();
}, 1000);

function udemyCourseApp() {
    const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 10);
    if (numberOfFilms != "" && numberOfFilms != null && numberOfFilms >= 1) {
        const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            private: false,
        };
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else {
            alert("Вы киноман.");
        }

        for (let i = 0; i < 2; i++) {
            const latestMovie = prompt("Один из последних просмотренных фильмов?");
            if (latestMovie == "") {
                alert("Вы не ввели название фильма.");
                i--;
            } else if (latestMovie == null) {
                alert("Вы не ответили на вопрос.");
                i--;
            } else if (latestMovie.length > 50) {
                alert("Слишком длинное название фильма. Попробуйте ещё раз.");
                i--;
            } else {
                for (let i = 0; i < 1; i++) {
                    const latestMovieRating = prompt("На сколько оцените его?");

                    if (latestMovieRating == "") {
                        alert("Вы не указали оценку для фильма.");
                        i--;
                    } else if (latestMovieRating == null) {
                        alert("Вы не ответили на вопрос.");
                        i--;
                    } else {
                        personalMovieDB.movies[latestMovie] = latestMovieRating;
                        console.log(personalMovieDB);
                        alert(`Фильм: ${latestMovie}, Оценка: ${latestMovieRating}`);
                    }
                }
            }
        }
    } else {
        alert("Ошибка. Повторите ввод.");
        udemyCourseApp();
    }
}