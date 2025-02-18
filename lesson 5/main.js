// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectangle = (a, b) => a * b;
console.log(sRectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => 3.14 * r * r;
console.log(sCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (h, r) => 2 * 3.14 * h * r;
console.log(sCylinder(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [121, true, "some text", false, 0, "some text 2", 125];
let readArray = (arr) => arr.forEach(value => console.log(value));
readArray(arr1);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let writeText = (text) => document.write(`<div><h1>${text}</h1></div>`);
writeText('Header 1');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let createList = (li) => document.write(`<ul><li>${li}</li><li>${li}</li><li>${li}</li></ul>`);
createList('some text');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
let createList2 = (n, text) => {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`
         <li>${text}</li>
        `);
    }
}
createList2(6, 'One item');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let createLiFromArr = (arr) => {
    document.write(`<ul></ul>`);
    arr.forEach(value => document.write(`<li>${value}</li>`));
}
createLiFromArr(arr1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {
        id: 1,
        name: 'Vasya',
        age: 32
    },
    {
        id: 2,
        name: 'Olya',
        age: 27
    },
    {
        id: 3,
        name: 'Petro',
        age: 37
    }
];
let readUsers = (users) => users.forEach(value => {document.write(`<div><h1>Name - ${value.name}</h1><p>ID - ${value.id}</p><p>Age - ${value.age}</p></div>`)});
readUsers(users);

// - створити функцію яка повертає найменьше число з масиву
let arrNumber = [1, 22, 11, 0, 45, 10, 2];
let findMin = (arr) => {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    console.log(minimum);
}
findMin(arrNumber);

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arr3 = [1, 2, 10];
let sum = (arr) => {
    let suma = 0;
    arr.forEach(value => suma += value);
    console.log(suma);
    return suma;
}
sum(arr3);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr4 = [11,22,33,44];
let swap = (arr,index1,index2) => {
    let a = arr[index1];
    let b = arr[index2];
    arr[index1] = b;
    arr[index2] = a;
    console.log(arr);
    return arr;
}
swap(arr4, 0, 1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let selectedCurrency;
    currencyValues.forEach(value => {
        if (value.currency === exchangeCurrency) {
            selectedCurrency = value;
        }
    })
    return sumUAH/selectedCurrency.value;
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
