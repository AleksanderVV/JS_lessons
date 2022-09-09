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

// =======================================================

// for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         first: for (let k = 0; k < 5; k++) {
//             if (k === 2) { continue first; }
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 5; i <= 10; i++) { console.log(i); }

// for (let i = 20; i > 10; i--) {
//     if (i === 13) { break; }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) { console.log(i); }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i < 16) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
//     i++;
// }

// const mass = [];
// for (let i = 5; i <= 10; i++) {
// mass.push(i);
//     mass[i - 5] = i;
// }
// console.log(mass);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i <= data.length - 1; i++) {
//     if (typeof data[i] === 'string') {
//         console.log(data[i]);
//         data[i] = data[i] + ' - done';
//     } else {
//         data[i] = data[i] * 2;
//     }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let i = 0;
// for (let j = data.length - 1; j >= 0; j--) {
//     result[j] = data[i];
//     i++;
// }
// console.log(result);

// const lines = 5;
// let result = '';
// let k = 0;

// for (let i = 1; i <= lines + 1; i++) {
//     for (let j = 0; j < (i * 2) - 1; j++) {
//         if (j > 0) {
//             result += '*';
//         } else {
//             result += ' '.repeat(lines - k) + '*';
//         }
//     }
//     k++;
//     result += '\n';
// }
// console.log(result);

//-----------Functions--------------------

// function sayHello(name = 'Антон') {
//     return 'Привет, ' + name;
// }

// console.log(sayHello());

// function neighboringNumbers(number) {
//     let mass = [number - 1, number, number + 1];
//     return mass;
// }

// console.log(neighboringNumbers(5));

// function getMathResult(number, count) {
//     let res = 0;
//     if (count < 1 || typeof(count) !== 'number') {
//         return number;
//     }
//     for (let i = 1; i <= count; i++) {
//         res += number * i;
//         if (i != count) {
//             res += '---';
//         } else {
//             res = res;
//         }
//     }
//     return res;
// }

// console.log(getMathResult(20, '3'));

// function calculateVolumeAndArea(lengthCube) {
//     let volumeCube = Math.pow(lengthCube, 3);
//     let squareCube = Math.pow(lengthCube, 2) * 6;
//     let strOk = `Обьём куба: ${volumeCube}, Площадь всей поверхности: ${squareCube}`;
//     let strErr = 'При вычислении произошла ошибка';

//     if (Number.isInteger(lengthCube) && lengthCube > 0) {
//         return strOk;
//     } else {
//         return strErr;
//     }
// }

// console.log(calculateVolumeAndArea(1));

// function getCoupeNumber(numberCoupe) {
//     if (Number.isInteger(numberCoupe) && numberCoupe >= 0) {
//         if (numberCoupe > 0 && numberCoupe < 37) {
//             for (let i = 4; i <= 36; i = i + 4) {
//                 if (numberCoupe <= i) {
//                     return i / 4;
//                 }
//             }
//         } else {
//             return 'Таких мест в вагоне не существует';
//         }
//     } else {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
// }

// console.log(getCoupeNumber(4));

// function getTimeFromMinutes(amountMinutes) {

//     if (Number.isInteger(amountMinutes) && amountMinutes >= 0) {
//         for (let i = 0; i <= amountMinutes; i = i + 60) {
//             let hour = Math.trunc(amountMinutes / 60);
//             if (hour === 0 || (hour >= 5 && hour <= 20) || (hour % 10 >= 5 && hour % 10 <= 9 || hour % 10 === 0)) {
//                 hour = `${hour} часов`;
//             } else if (hour === 1 || (hour % 10 === 1)) {
//                 hour = `${hour} час`;
//             } else if (hour >= 2 && hour <= 4 || (hour % 10 >= 2 && hour % 10 <= 4)) {
//                 hour = `${hour} часа`;
//             }

//             let minutes = amountMinutes % 60;
//             if (minutes === 0 || (minutes >= 5 && minutes <= 20) || (minutes % 10 >= 5 && minutes % 10 <= 9 || minutes % 10 === 0)) {
//                 minutes = `${minutes} минут`;
//             } else if (minutes === 1 || (minutes % 10 === 1)) {
//                 minutes = `${minutes} минута`;
//             } else if (minutes >= 2 && minutes <= 4 || (minutes % 10 >= 2 && minutes % 10 <= 4)) {
//                 minutes = `${minutes} минуты`;
//             }

//             return `Это ${hour} и ${minutes}`;
//         }
//     } else {
//         return 'Ошибка, проверьте данные';
//     }
// }

// console.log(getTimeFromMinutes(15123));

// function findMaxNumber(firstNum, secondNum, thirdNum, fourthNum) {
//     if ((typeof arguments[0]) === 'number' && (typeof arguments[1]) === 'number' && (typeof arguments[2]) === 'number' && (typeof arguments[3]) === 'number') {
//         return Math.max.apply(null, arguments);
//     } else {
//         return 0;
//     }
// }

// console.log(findMaxNumber(99, 4, 1));

function fib(a) {
    if (a === 0 || typeof a !== 'number' || !Number.isInteger(a)) { return ""; }
    if (a === 1) { return "0"; }


    const mass = [0, 1];
    let x = 0;
    let y = 1;
    for (let i = 2; i < a; i++) {
        mass[i] = mass[i - 1] + mass[i - 2];
    }
    let strFib = mass.join(" ");
    return strFib;
}

console.log(fib(7.3));