// const path = require('path');

// //__dirname - путь к текущей папке 
// console.log('Склеить участки пути', path.join(__dirname, '..'));
// // должен давать абсолютный путь, у меня путь к внешней папке, уточнить
// console.log('Получить абсолютный путь ', path.resolve('newFolder', 'newFolder(2)'));

// const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js');
// console.log('Парсинг пути', path.parse(fullpath));

// console.log('Разделитель в ОС ', path.sep);
// console.log('Проверка на абсолютный путь ', path.isAbsolute('first/second'));
// console.log('Название файла ', path.basename(fullpath));
// console.log('Расширение файла ', path.extname(fullpath));

//----------------

// const siteURL = 'http://localhost:8080/users?id=5123';

// const url = new URL(siteURL);

// console.log(url.href);
// console.log(url.origin);
// console.log(url.protocol);
// console.log(url.username);
// console.log(url.password);
// console.log(url.host);
// console.log(url.hostname);
// console.log(url.port);
// console.log(url.pathname);
// console.log(url.search);
// console.log(url.searchParams);
// console.log(url.hash);