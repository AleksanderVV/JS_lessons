//В каждой книге есть n страниц с номерами страниц от 1 до n. 
//Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. 
//Эта функция возвращает число - количество страниц n в книге. 

function amountOfPages(summary) {
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;

        if (result.length >= summary) {
            n = i;
            break;
        }
    }

    return n;
}

console.log(amountOfPages(16));