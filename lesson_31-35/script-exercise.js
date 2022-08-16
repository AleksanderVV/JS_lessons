// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             html: '99%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function() {
//         let strMyAge;
//         strMyAge = `Мне ${personalPlanPeter.age} и я владею языками: ${personalPlanPeter.skills.languages.join(' ').toUpperCase()}`;
//         return strMyAge;
//     }
// };

// function showExperience(plan) {
//     const expirience = plan.skills.exp;
//     return expirience;
// }
// console.log(showExperience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//     const programmingLangsArr = plan.skills.programmingLangs;
//     let strRes = '';
//     if (personalPlanPeter === undefined) {
//         return strRes;
//     }
//     for (let i in programmingLangsArr) {
//         strRes += `Язык ${i} изучен на ${programmingLangsArr[i]} \n`;
//     }
//     return strRes;
// }
// console.log(showProgrammingLangs(personalPlanPeter));


// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//=============================================================================

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     }
//     let strArr = `Семья состоит из: ${arr.join(' ')}`;
//     return strArr;
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let result = arr.join('\n').toLowerCase();
//     return result;
// }

// console.log(standardizeStrings(favoriteCities));

//========================================================================

// const someString = null;

// function reverse(str) {
//     if (typeof str !== 'string') {
//         return 'Error!';
//     } else {
//         let arrFromString = str.split("");
//         let reverseArr = [];
//         arrFromString.forEach((value, index, arrFromString) => {
//             reverseArr[arrFromString.length - index - 1] = value;
//         });
//         reverseArr = reverseArr.join('');
//         return reverseArr;
//     }

// }

// console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let str = 'Доступные валюты: \n';
    arr.forEach((value, index) => {
        if (value !== missingCurr) {
            str += `${value}\n`;

        }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));