// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let text = document.getElementById('text');
let buttonHiddenText = document.getElementById('btnHiddenText');
buttonHiddenText.onclick = function () {
    text.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// let button = document.createElement('button');
const formCheckAge = document.forms;
let inputAge = document.getElementById('inputAge');
let buttonAge = document.getElementById('btnCheckAge');
buttonAge.onclick = function (ev) {
    ev.preventDefault();
    if (!inputAge.value) {
        alert('Enter age!');
    } else {
        if (inputAge.value == 18) {
            alert('Вік - 18');
        } else if (inputAge.value < 18) {
            alert('Вік менше 18');
        } else if (inputAge.value > 18) {
            alert('Вік більше 18');
        } else {
            alert('Error');
        }
    }
}

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const userInfoForm = document.forms.newForm;
userInfoForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let name = userInfoForm.name.value;
    let surname = userInfoForm.surname.value;
    let age = userInfoForm.age.value;
    let userInfoBlock = document.getElementById('userInfo');
    if (name && surname && age) {
        userInfoBlock.innerHTML = `<p>Name - ${name}</p> <p>Username - ${surname}</p> <p>Age - ${age}</p>`;
    }
});


// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let convertForm = document.forms.lbConvert;
lbConvert.kg.oninput = function () {
    let lbBlock = document.getElementById('lbBlock');
    let kgToLb = lbConvert.kg.value * 2.2046;
    lbBlock.innerHTML = `<p>${lbConvert.kg.value} = ${kgToLb}</p>`;
}

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    let isArray = localStorage.getItem(arrayName);
    if (!isArray) {
        console.log('This array is not in localStorage!)');
    }
    let selectedArray = JSON.parse(isArray);
    if (typeof objToAdd === 'object') {
        selectedArray.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(selectedArray));
}

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let valueTable = formCreateTable.valueTable.value;
let newTable  = document.getElementById('newTable');
formCreateTable.addEventListener('submit', (ev) => {
    let formCreateTable = document.forms.formCreateTable;
    let tr = parseInt(formCreateTable.tr.value);
    let td = parseInt(formCreateTable.td.value);
    let tableValue = formCreateTable.valueTable.value;
    ev.preventDefault();
    if (tr && td && tableValue) {
        for (let i = 0; i < tr; i++) {
            let createTr = document.createElement('tr');
            newTable.appendChild(createTr);
            for (let j = 0; j < td; j++) {
                let createTd = document.createElement('td');
                createTd.innerText = tableValue;
                createTr.appendChild(createTd);
            }
        }
    } else {
        if (!tr) {
            throw new Error('Enter tr');
        } else if (!td) {
            throw new Error('Enter td');
        } else if (!tableValue) {
            throw new Error('Enter value');
        } else {
            throw new Error('Try again');
        }
    }
});

