// - Є масив coursesArray
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesListBlock = document.createElement('div');
document.body.appendChild(coursesListBlock);

coursesArray.forEach(course => {
    let courseBlock = document.createElement('div');
    coursesListBlock.appendChild(courseBlock);

    let title = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = course.title;
    title.appendChild(h1);
    courseBlock.appendChild(title);

    let duration = document.createElement('div');
    duration.classList.add('duration-block');
    courseBlock.appendChild(duration);

    let monthDuration = document.createElement('div');
    let hourDuration = document.createElement('div');
    duration.appendChild(monthDuration);
    duration.appendChild(hourDuration);
    let monthText = document.createElement('p');
    monthText.innerText = `Month duration - ${course.monthDuration}`;
    monthDuration.appendChild(monthText);
    let hourText = document.createElement('p');
    hourText.innerText = `Hour duration - ${course.hourDuration}`;
    hourDuration.appendChild(hourText);

    let modulesBlock = document.createElement('div');
    courseBlock.appendChild(modulesBlock);
    let modulesTitle = document.createElement('h2');
    modulesTitle.innerText = 'Modules:';
    modulesBlock.appendChild(modulesTitle);
    let ul = document.createElement('ul');
    modulesBlock.appendChild(ul);
    course.modules.forEach(module => {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    });
});

// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
// let blocks = document.createElement('div');
// document.body.appendChild(blocks);
// blocks.style.display = 'flex';
// blocks.style.alignItems = 'stretch';
// blocks.style.justifyContent = 'space-between';
// let block1 = document.createElement('div');
// block1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur aut corporis, debitis itaque minima minus, molestias officia omnis perspiciatis placeat porro, quas quibusdam quisquam quos repudiandae suscipit totam vero.';
// let block2 = document.createElement('div');
// block2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
// let block3 = document.createElement('div');
// block3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur aut corporis, debitis itaque minima minus, molestias officia omnis perspiciatis placeat porro, quas quibusdam quisquam quos repudiandae suscipit totam vero.';
// blocks.appendChild(block1);
// blocks.appendChild(block2);
// blocks.appendChild(block3);
// block1.style.width = '33%';
// block2.style.width = '33%';
// block3.style.width = '33%';
// block1.style.backgroundColor = 'yellow';
// block2.style.backgroundColor = 'blue';
// block3.style.backgroundColor = 'pink';
