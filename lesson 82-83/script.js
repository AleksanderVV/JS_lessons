'use strict';

const persone = {
    name: 'Alex',
    tel: '+380990843551',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); // Глубокая копия обьекта
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone); // Глубокая копия обьекта

console.log(JSON.stringify(persone)); //  String {"name":"Alex","tel":"+380990843551"}
console.log(JSON.parse(JSON.stringify(persone))); //  Object {name: 'Alex', tel: '+380990843551'}

//=======================================================================================================