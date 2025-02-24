// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let newCoursesArray = coursesAndDurationArray
    .map((course, index) => ({id: index +1, ...course}));
console.log(newCoursesArray);

// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepClone(obj) {
    if (obj) {
        let functionsArr = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const cloneFunc = obj[key].bind({});
                functionsArr.push({cloneFunc, key});
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functionsArr) {
            cloneObj[func.key] = func.cloneFunc;
        }
        return cloneObj;
    }
}

let user = {
    id: 1,
    name: 'vasya',
    age: 32,
    greeting() {
        console.log('Hello');
    }
}

let userClone = deepClone(user);
userClone.greeting();



