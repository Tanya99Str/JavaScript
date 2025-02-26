// - створити блок,
let block = document.createElement('div');
let text = document.createElement('p');
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut beatae earum fugiat magni molestias natus neque odio, porro rerum saepe tempora, vero, voluptatum! Cumque dignissimos natus nisi quasi sit.';
block.appendChild(text);
// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
console.log(block.classList);
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'yellow';
block.style.color = 'green';
block.style.fontSize = '.9em';
// - додати цей блок в body.
document.body.appendChild(block);
// - клонувати його повністю, та додати клон в body.






// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let array = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
document.body.appendChild(ul);
array.forEach(value => {
    let li = document.createElement('li');
    li.innerText = value;
    ul.appendChild(li);
});


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let courses = document.createElement('div');
document.body.appendChild(courses);
coursesAndDurationArray.forEach(value => {
    let courseBlock = document.createElement('div');
    let title = document.createElement('h2');
    let monthDuration = document.createElement('p');
    title.innerText = `Title - ${value.title}`;
    monthDuration.innerText = `Month duration - ${value.monthDuration}`;
    courseBlock.appendChild(title);
    courseBlock.appendChild(monthDuration);
    courses.appendChild(courseBlock);
});


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
coursesAndDurationArray.forEach(value => {
    let courseBlock = document.createElement('div');
    courseBlock.classList.add('item');
    document.body.appendChild(courseBlock);
    let title = document.createElement('h1');
    title.innerText = `Title - ${value.title}`;
    title.classList.add('heading');
    let description = document.createElement('p');
    description.innerText = `Month duration - ${value.monthDuration}`;
    description.classList.add('description');
    courseBlock.appendChild(title);
    courseBlock.appendChild(description);
});
