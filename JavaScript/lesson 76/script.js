'use strict';

function showThis(a, b) {
    // console.log(this); //undefined

    function summ() {
        // console.log(this); //undefined
        return a + b;
    }

    console.log(summ());
}
// showThis(4, 5);
// 1) If 'use strict' this == undefined

const obj = {
    a: 20,
    b: 15,
    sum: function() { console.log(this); }
};

// obj.sum(); // {a: 20, b: 15, sum: ƒ} - this in Metods == Object

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 23);
// this in Constructors and Classes == new Object;

function saveName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// saveName.call(user, " Smith"); //ручная привязка this
// saveName.apply(user, [' Smith']); //ручная привязка this

//==================================

function count(num) {
    return this * num;
}

const double = count.bind(2); //ручная привязка this
// console.log(double(13));

//============================================================================

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this); //  <button>this</button>
//     this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => {
    console.log(this); //  [object Window]
    e.target.style.backgroundColor = 'red';
});