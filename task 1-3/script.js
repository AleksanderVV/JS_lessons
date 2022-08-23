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

// console.log(amountOfPages(16));

//Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. 
//Если строка является панграммой - вернется true, если нет - false.

function isPangram(string) {
    string = string.toLowerCase();
    let arr = [...string];
    arr = arr.filter((f) => { return f != " "; });
    arr = Array.from(new Set(arr));
    if (arr.length == 26) {
        return true;
    } else {
        return false;
    }
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));

//Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы.
//Учтите, что сам вложенный массив тоже входит в счет.

// function deepCount(a) {
//     let count = a.length;
//     for (let i = 0; i < a.length; i++) {
//         // debugger
//         if (Array.isArray(a[i])) {
//             count += deepCount(a[i]);
//         }
//     }
//     return count;
// }

function deepCount(a) {
    return a.reduce(function(s, e) {
        // debugger
        return s + (Array.isArray(e) ? deepCount(e) : 0);
    }, a.length);
}

console.log(deepCount(["1", 5, "3", ['45']]));