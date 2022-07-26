'use strict';

// console.log('запрос данных ....');

// const req = new Promise(function(resolve, reject) { // resolve - если всё ок, reject - если что-то пошло не так
//     setTimeout(() => {
//         console.log('подготовка данных ....');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);

//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = 'true';
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('Error!!!');
// }).finally(() => {
//     console.log('Finaly');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {  //ждет выполнения всех промисов
//     console.log('all');
// });

Promise.race([test(1000), test(5000)]).then(() => { //выполняется после первого промиса
    console.log('all');
});