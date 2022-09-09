'use strict';

// const persone = {
//     name: 'Alex',
//     age: 42,

//     get userAge() {
//         return this.age;
//     },
//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge);
// console.log(persone.userAge = 30);
// console.log(persone.userAge);

//==============================================

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`Name user: ${this.name}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Error');
        }
    }
}


const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);

ivan.say();