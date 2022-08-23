const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// btns[0].classList.add('red');
// btns[0].classList.remove('blue');
// // btns[0].classList.toggle(' ');

// if (btns[0].classList.contains('red')) {
//     console.log('hy');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') {
        console.log('dfs');
    }
});