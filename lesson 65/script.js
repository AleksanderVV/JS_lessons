let timerId, //устанавливаем таймер
    btn = document.querySelector('button'),
    i = 0;
// const timerInterval = setInterval(logger, 2000);



btn.addEventListener('click', () => {
    timerId = setInterval(logger, 1000);
});

function logger() {
    if (i == 3) {
        clearInterval(timerId); //останавливаем таймер
    }
    console.log('text');
    i++;
    console.log(i);
}