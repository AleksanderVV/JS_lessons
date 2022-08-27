'use strict';

// const lock = function(a, b, ...rest) {
//     console.log(a, b, rest);
//     console.log(a, b, ...rest);
// };

// lock('dfdsf', 'sdffsdf', 'sdf', 5, 6, 'dfgg', false);

// function calcOrDouble(number, basic = 3) {
//     console.log(number * basic);
// }

// calcOrDouble(3);

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
}

function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    }
    const extractCurrProtocol = () => {
        return this.protocol;
    }

    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
}

const url = showCurrentURL.bind(urlObj);

console.log(url);