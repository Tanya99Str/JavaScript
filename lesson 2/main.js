// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [21, true, "some text", "test", 10500, false, 21, 9, "array", 121];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Fairy Tale',
//     pageCount: 369,
//     genre: 'horror'
// }
// console.log(book1);
//
// let book2 = {
//     title: 'Murder on the Orient Express',
//     pageCount: 315,
//     genre: 'mystery'
// }
// console.log(book2);
//
// let book3 = {
//     title: 'Mavka. Forest Song',
//     pageCount: 160,
//     genre: 'tale'
// }
// console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Fairy Tale',
    pageCount: 369,
    genre: 'horror',
    authors: [
        {
            name: 'Vasya',
            age: 32
        },
        {
            name: 'Olya',
            age: 28
        }
    ]
}
console.log(book1);

let book2 = {
    title: 'Murder on the Orient Express',
    pageCount: 315,
    genre: 'mystery',
    authors: [
        {
            name: 'Oleh',
            age: 45
        },
        {
            name: 'Inna',
            age: 40
        }
    ]
}
console.log(book2);

let book3 = {
    title: 'Mavka. Forest Song',
    pageCount: 160,
    genre: 'tale',
    authors: [
        {
            name: 'Petro',
            age: 34
        },
        {
            name: 'Ivan',
            age: 22
        }
    ]
}
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Vasya',
        username: 'vasya1999',
        password: 'vasya1999v'
    },
    {
        name: 'Olya',
        username: 'Olga21',
        password: 'olya21o'
    },
    {
        name: 'Nazar',
        username: 'naz98',
        password: 'nazar1998'
    },
    {
        name: 'Ivan',
        username: 'ivanko',
        password: 'ivanko97'
    },
    {
        name: 'Tanya',
        username: 'tetiana99',
        password: 'tetiana1999'
    },
    {
        name: 'Valera',
        username: 'valera27',
        password: 'valera27'
    },
    {
        name: 'Anastasiia',
        username: 'anastasiia_a',
        password: 'nastya32'
    },
    {
        name: 'Oleg',
        username: 'ol_oleg',
        password: 'oleg1997'
    },
    {
        name: 'Petro',
        username: 'petya_a',
        password: 'petyaP'
    },
    {
        name: 'Katya',
        username: 'katerynaPe',
        password: 'kateryna_98'
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperature1 = [
    [0, 10, 2], //day 1
    [-2, 4, 1], //day 2
    [4, 12, 2], //day 3
    [-2, 5, -4], //day 4
    [3, 9, 2], //day 5
    [0, 4, -1], //day 6
    [-5, 0, -3] //day 7
];
console.log(temperature1);
let temperature2 = [
    {
        'morning': 0,
        'day': 10,
        'evening': 2
    },
    {
        'morning': -2,
        'day': 4,
        'evening': 1
    },
    {
        'morning': 4,
        'day': 12,
        'evening': 2
    },
    {
        'morning': -2,
        'day': 5,
        'evening': -4
    },
    {
        'morning': 3,
        'day': 9,
        'evening': 2
    },
    {
        'morning': 0,
        'day': 4,
        'evening': -1
    },
    {
        'morning': -5,
        'day': 0,
        'evening': -3
    }
];
console.log(temperature2);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('Ведіть число');
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Введіть число від 0 до 59');
if (time >= 0 && time < 15) {
    console.log('1 чверть');
} else if (time >= 15 && time < 29) {
    console.log('2 чверть');
} else if (time >= 30 && time < 45) {
    console.log('3 чверть');
} else if (time >= 45 && time < 59) {
    console.log('4 чверть');
} else {
    console.log('Некоректно введено дані');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число від 1 до 31');
if (day >= 1 && day <= 10) {
    console.log('1 декада місяця');
} else if (day >= 11 && day <=20) {
    console.log('2 декада місяця');
} else if (day >= 21 && day <=31) {
    console.log('3 декада місяця');
} else {
    console.log('Некоректно введено дані');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfTheWeek = +prompt('Введіть порядковий день тижня (від 1 до 7)');
switch (dayOfTheWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Incorrect data');
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Введіть перше число');
let b = +prompt('Введіть друге число');
if (a > b) {
    console.log(`Число ${a} є максимальним`);
} else if (a < b) {
    console.log(`Число ${b} є максимальним`);
} else if (a === b) {
    console.log('Числа рівні');
} else {
    console.log('Incorrect data');
}


// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x = prompt('Введіть значення');
if (!x) {
    x = 'default';
    console.log(x);
}

// awLXL6TBzg
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
coursesAndDurationArray.forEach(value => {
    if (value.monthDuration > 5) {
        console.log(`Тривалість навчання курсу ${value.title} триває ${value.monthDuration} місяців. Супер!`)
    }
});
