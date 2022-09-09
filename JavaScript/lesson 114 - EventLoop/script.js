'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout-2s');
// }, 2000);

// setTimeout(() => {
//     console.log('timeout-4s');
// }, 4000);

// console.log(2);



function foo(a, b) {
    const [first, second] = a;
    const { eng, ru } = b;
    console.log({ eng, ru });

    return `${second}, ${ru}`;
}

const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' })