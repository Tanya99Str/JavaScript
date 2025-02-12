// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let j = 0;
while (j < arr1.length) {
    // console.log(arr1[j]);
    j++;
}
console.log(arr1);
// 2. перебрати його циклом for
for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < arr1.length) {
    if (k % 2 !== 0) {
        // console.log(arr1[k]);
    }
    k++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 !== 0) {
        // console.log(arr1[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let m = 0;
while (m < arr1.length) {
    if (arr1[m] % 2 === 0) {
        // console.log(arr1[m]);
    }
    m++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        // console.log(arr1[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 3 === 0) {
        // console.log(arr1[i]);
        // arr1[i] = "okten";
    }
}
console.log(arr1);
// 8. вивести масив в зворотньому порядку.
// console.log(arr1.reverse());


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let n = arr1.length;
console.log(n);
while (n > 0) {
    // console.log(arr1[n-1]);
    n--;
}
console.log(arr1);

for (let i = arr1.length; i > 0; i--) {
    // console.log(arr1[i-1]);
}

let k1 = arr1.length;
while (k1 > 0) {
    if (k1 % 2 !== 0) {
        // console.log(arr1[k1-1]);
    }
    k1--;
}

for (let i = arr1.length; i > 0; i--) {
    if (i % 2 !== 0) {
        // console.log(arr1[i-1]);
    }
}

let m1 = arr1.length;
while (m1 > 0) {
    if (arr1[m1-1] % 2 === 0) {
        // console.log(arr1[m1-1]);
    }
    m1--;
}

for (let i = arr1.length; i > 0; i--) {
    if (arr1[i-1] % 2 === 0) {
        // console.log(arr1[i-1]);
    }
}

for (let i = arr1.length; i > 0; i--) {
    if (arr1[i-1] % 3 === 0) {
        // console.log(arr1[i-1]);
        arr1[i-1] = "okten";
    }
}
console.log(arr1);
