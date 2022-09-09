'use strict';

const now = new Date();


// console.log(now); // вывод текущей даты
// console.log(now.getFullYear()); //получаем год
// console.log(now.getMonth()); //получаем месяц - считаем с 0!!!!
// console.log(now.getDate()); //получаем день месяца
// console.log(now.getHours());
// console.log(now.getUTCHours()); 

// console.log(now.getTimezoneOffset()); //получаем разницу с UTC
// console.log(now.getTime()); //получаем количество миллисекунд с 01.01.1970

// console.log(now.setHours(11)); //устанавливаем часы

let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(end - start);