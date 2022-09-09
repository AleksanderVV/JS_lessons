'use strict';

const box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

box.style.backgroundColor = 'blue';
box.style.cssText = 'width: 500px;'; // previous CSS style back in red

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
const text = document.createTextNode('Hello');

div.classList.add('black');

wrapper.prepend(div);
// document.body.append(div);

// hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();
// hearts[2].replaceWith(circles[0]);
div.innerHTML = '<h1>Hello</h1>';
// div.textContent = ' world';
div.insertAdjacentHTML('afterend', 'hello');