// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode); //получение родителей элементов
// console.log(document.querySelector('#current').parentElement); //получение родителей элементов

// console.log(document.querySelector('[data-current = "3"]').nextSibling); // получение следующего соседа
// console.log(document.querySelector('[data-current = "3"]').previousSibling); // получение предыдущего соседа

// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // получение следующего элемента
// console.log(document.querySelector('[data-current = "3"]').previousElementSibling); // получение предыдущего элемента

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}