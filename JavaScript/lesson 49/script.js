// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box ');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('move');
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });
});

// touches - количество пальцев прикасающихся к экрану
// targetTouches - количество пальцев прикасающихся к элементу
// changedTouches - список пальцев которые совершили какое-то действие