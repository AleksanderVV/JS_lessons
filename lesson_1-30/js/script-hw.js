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

function getMathResult(number, count) {
    let res = 0;
    if (count < 1 || typeof(count) !== 'number') {
        return number;
    }
    for (let i = 1; i <= count; i++) {
        res += number * i;
        if (i != count) {
            res += '---';
        } else {
            res = res;
        }
    }
    return res;
}

console.log(getMathResult(20, '3'));