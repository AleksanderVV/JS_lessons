'use strict';

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
    let i = [];
    data.forEach((value, index) => {
        if (value.amount > 0) {
            i.push(value.amount);
        }
    });
    return i.reduce((sum, curent) => sum + curent);
};

// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    let result = 0;
    if (data.some(item => item.amount < 0)) {
        data.forEach((value, index) => {
            result += value.amount;
        });
        return result;
    } else {
        return getPositiveIncomeAmount(data);
    }
};

console.log(getTotalIncomeAmount(funds));