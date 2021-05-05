"use strict";

udemyCourseApp();

function udemyCourseApp() {
    const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 10);

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false,
    };

    const firstLatestMovie = prompt("Один из последних просмотренных фильмов?"),
        firstLatestMovieRating = prompt("На сколько оцените его?"),
        secondLatestMovie = prompt("Один из последних просмотренных фильмов?"),
        secondLatestMovieRating = prompt("На сколько оцените его?");

    personalMovieDB.movies[firstLatestMovie] = firstLatestMovieRating;
    personalMovieDB.movies[secondLatestMovie] = secondLatestMovieRating;

    console.log(personalMovieDB);
}