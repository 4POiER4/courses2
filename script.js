"use strict"

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('What you name', '');
// answers[1] = prompt('What you second name', '');
// answers[2] = prompt('how old are you', '');
// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`hello , ${user}`);

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2+2*2 === '8');

// const isChecked = true,
//       isClose = true;

// console.log(isChecked || !isClose);

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: [],
//     privat: false
// };

// const a = prompt('Один из последних фильмов', ''),
//       b = prompt('оценка', ''),
//       c = prompt('Один из последних фильмов', ''),
//       d = prompt('оценка', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;
      
// console.log(personalMovieDB);

// if (4==9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// if (num<49){
//     console.log('Error');
// }else if (num>100){
//     console.log('many');
// }else{
//     console.log('Good');
// }

// (num === 50) ? console.log('OK') : console.log('Error');

const num = 50;

switch (num) {
    case 49: 
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 51: 
        console.log('true');
        break;
    default: 
        console.log('not good not bad');
        break;
}