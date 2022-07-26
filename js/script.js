"use strict";

let storeName = "Zakaz.UA";
const storeDescription = {
    budget: 10000,
    employees: ['Alex', 'Evgen', 'Elena'],
    products: { audi: 10000, bmw: 15000 },
    open: true
};

console.log(`My store - ${storeName}`);
console.log(`My store administrator is ${storeDescription.employees[1]}`);