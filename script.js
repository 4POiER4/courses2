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

// const num = 50;

// switch (num) {
//     case 49: 
//         console.log('False');
//         break;
//     case 100:
//         console.log('False');
//         break;
//     case 51: 
//         console.log('true');
//         break;
//     default: 
//         console.log('not good not bad');
//         break;
// }

// const hamburger = 5;
// const fries = null;
// if (hamburger && fries) {
//     console.log('good');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola  = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'hjgkhfdhjkkl');

// if (hamburger === 3 && cola === 1 && fries)  {
//     console.log('good');
// }else{
//     console.log('error');
// }

// const hamburger = 3;
// const fries = 3;
// const cola  = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets)  {
//     console.log('good');
// }else{
//     console.log('error');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, samReport, mariaReport = 'done' ;
// let dinReport = 'error' ;

// console.log(dinReport || johnReport || samReport || mariaReport);

// console.log(!1);

// console.log( NaN || 2);
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log(  !3 );
// console.log( !1 && 2 || !3);
// console.log( null && !3);
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log(  undefined || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else{
//     console.log('error');
// }

// console.log( NaN || null && !3 && undefined || 5);
// console.log(NaN || null );


// let num = 50;
//
// while (num < 55){
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 10; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
//
// }

// for (let i=0; i<3; i++){
//     console.log(i);
//     for (let j=0; j<3; j++){
//         console.log(j);
//
//     }
// }

// пирамидка
// let result = '';
// const lenght = 7;
//
// for(let i=1; i<lenght; i++){
//     for(let j = 0; j < i; j++){
//         result += "*";
//     }
//     result += '\n';
// }
//
// console.log(result);


 // first: for (let i=0; i<3; i++){
 //     console.log(`First level: ${i}`);
 //     for (let j=0; j<5; j++){
 //        console.log(`Second level: ${j}`);
 //         for (let k=0; k<3; k++){
 //             if (k===2) break first;
 //             console.log(`Third level: ${k}`);
 //         }
 //     }
 // }

//Упражнение 1 задание 1
let num = 5;
while (num<10){
    console.log(num);
    num++;
}
//Упражнение 2 задание 2