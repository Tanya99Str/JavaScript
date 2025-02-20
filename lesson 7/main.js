// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name =name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Vasya', 'Petrenko', 'vasya_petr@gmail.com', '93379992'),
    new User(2, 'Petro', 'Vasylenko', 'vasylenko_petro@gmail.com', '380945645654'),
    new User(3, 'Olya', 'Vah', 'olga@gmail.com', '380945679454'),
    new User(4, 'Vasylyna', 'Franko', 'vasya_franko@gmail.com', '380948743756'),
    new User(5, 'Oleg', 'Pototskyy', 'olegpototskyy@gmail.com', '380966666666'),
    new User(6, 'Petya', 'Shevchenko', 'shevchenkoPetya@gmail.com', '380987777774'),
    new User(7, 'Tanya', 'Shevchenko', 'tanyaFra@gmail.com', '9025656574'),
    new User(8, 'Nika', 'Sydorenko', 'nika99@gmail.com', '380934545456'),
    new User(9, 'Nazar', 'Nazarevych', 'nazar_naz@gmail.com', '380939878900'),
    new User(10, 'Sasha', 'Sashko', 'sashko_sandra@gmail.com', '380932121221')
];
console.log(users);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name =name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, 'Vasya', 'Petrenko', 'vasya_petr@gmail.com', '93379992',
        ['apple', 'milk', 'bread', 'fish', 'rice']),
    new Client(2, 'Petro', 'Vasylenko', 'vasylenko_petro@gmail.com', '380945645654',
        ['orange', 'milk', 'potato', 'cucumber']),
    new Client(3, 'Olya', 'Vah', 'olga@gmail.com', '380945679454',
        ['sugar', 'yogurt', 'butter']),
    new Client(4, 'Vasylyna', 'Franko', 'vasya_franko@gmail.com', '380948743756',
        ['ice cream', 'potato', 'carrot', 'chicken']),
    new Client(5, 'Oleg', 'Pototskyy', 'olegpototskyy@gmail.com', '380966666666',
        ['bread', 'tea', 'cake', 'water']),
    new Client(6, 'Petya', 'Shevchenko', 'shevchenkoPetya@gmail.com', '380987777774',
        ['chocolate', 'milk', 'oat', 'juice']),
    new Client(7, 'Tanya', 'Shevchenko', 'tanyaFra@gmail.com', '9025656574',
        ['kefir', 'yogurt', 'corn', 'carrot']),
    new Client(8, 'Nika', 'Sydorenko', 'nika99@gmail.com', '380934545456',
        ['cabbage', 'broccoli', 'potato', 'tomato']),
    new Client(9, 'Nazar', 'Nazarevych', 'nazar_naz@gmail.com', '380939878900',
        ['butter', 'bread', 'water', 'coffee']),
    new Client(10, 'Sasha', 'Sashko', 'sashko_sandra@gmail.com', '380932121221',
        ['milk', 'flour'])
];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
       return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    this.info = function () {
        for (const argumentsKey in this) {
            return `${argumentsKey} - ${this[argumentsKey]}`;
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed += newSpeed;
    }

    this.changeYear = function(newValue) {
        return this.year = newValue;
    }

    this.addDriver = function(driver) {
        if (driver) {
            return this.driver = driver;
        }
    }
}
let car = new Car('Honda', 'Japan', 2017, 270, 1.5);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2018));
console.log(car.addDriver({id: 1, name: 'Vasya', surname: 'Franko', age: 32}));
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carr {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    info () {
        for (const argumentsKey in this) {
            return `${argumentsKey} - ${this[argumentsKey]}`;
        }
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        if (driver) {
            return this.driver = driver;
        }
    }
}
let car2 = new Carr('Honda', 'Japan', 2017, 270, 1.5);
console.log(car2);
console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(15));
console.log(car2.changeYear(2019));
console.log(car2.addDriver(new User(1, 'Vasya', 'Franko', 'vasya_franko@gmail.com', '380934545554')));
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
  new Cinderella('Cinderella1', 21, 35),
  new Cinderella('Cinderella2', 19, 39),
  new Cinderella('Cinderella3', 27, 40),
  new Cinderella('Cinderella4', 22, 37),
  new Cinderella('Cinderella5', 23, 36),
  new Cinderella('Cinderella6', 24, 34),
  new Cinderella('Cinderella7', 21, 35),
  new Cinderella('Cinderella8', 20, 36),
  new Cinderella('Cinderella9', 18, 39),
  new Cinderella('Cinderella10', 27, 38)
];
console.log(cinderellas);
let prince = new Prince('Petya', 27, 34);
console.log(prince);

cinderellas.forEach(cinderella => {
    if (cinderella.footSize === prince.footSize) {
        console.log(`Принц шукав попелюшку з іменем ${cinderella.name}, в якої розмір ноги - ${cinderella.footSize} та вік - ${cinderella.age}`);
    }
});
console.log(cinderellas.find(cinderella => cinderella.footSize === prince.footSize));
