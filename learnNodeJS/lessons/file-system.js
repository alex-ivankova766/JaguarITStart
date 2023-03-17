// const fs = require('fs'); //фс - файловая система
// const path = require('path'); 

// // -----------------------------------------------
// // создать папку:
// // fs.mkdirSync(path.resolve(__dirname, 'dir'));

// // -----------------------------------------------
// // создать несколько вложенных папок:
// // fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true});

// // -----------------------------------------------
// // вложенные папки асинхронно, с отловом ошибки:
// // console.log("Start");

// // fs.mkdir(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'),  {recursive: true}, (err) => {
// //     if (err) {
// //         console.log(err);
// //         return;
// //     }
// //     console.log("Папка создана");
// // });

// // console.log("End");

// // -----------------------------------------------
// // удаление папки с отловом ошибки:

// // fs.mkdirSync(path.resolve(__dirname, 'dir'), (err) => {
// //     if (err) {
// //         console.log(err);
// //         return;
// //     }
// //     console.log("Папка создана");
// // });

// // fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
// //     if (err) {
// //         throw err;
// //     }
// // });

// // -----------------------------------------------
// // создание файла(если файл уже есть, данные перезапишутся):

// // fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Hello dear new file', (err) => {
// //     if (err) {
// //         throw err;
// //     }
// //     console.log("File is born");
// // });

// // -----------------------------------------------
// /* дозаписать данные в файл:
// (это можно разместить внутри функции создающей файл, 
//     но будет ад колбеков)
//     поэтому используют fsPromise.

//     */

// // fs.appendFile(path.resolve(__dirname, 'test.txt'), ', it is your end.', (err) => {
// //     if (err) {
// //         throw err;
// //     }
// //     console.log("File changed");
// // });

// // -----------------------------------------------
// //promises в некоторых версиях нода доступны таким образом:

// // const fsPromise = require('fs/promises');
// // const { resolve } = require('path');
// // const { rejects } = require('assert');

// // fsPromise.mkdir('/').then().catch();
// // fsPromise.readFile('/').then().catch();
// // fsPromise.writeFile('/').then().catch();
// // fsPromise.appendFile('/').then().catch();
// // fsPromise.rm('/').then().catch();
// // fsPromise.rmdir('/').then().catch();

// // -----------------------------------------------
// //но нужно уметь:
// //1. запись файла

// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => 
//     fs.writeFile(path, data, 
//     (err) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve();
//     }))
// };

// // -----------------------------------------------
// // дозапись данных в файл

// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => 
//     fs.appendFile(path, data,
//     (err) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve();
//     }))
// };
// // -----------------------------------------------
// // чтение файлов, без кодировки будет Buffer

// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => 
//     fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve(data);
//     }))
// };

// // writeFileAsync(path.resolve(__dirname, 'test1.txt'), 'writeFileAsync')
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test1.txt'), ' works!'))
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test1.txt'), ' And works!'))
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test1.txt'), ' And works more time!'))
// //     .then(() => readFileAsync(path.resolve(__dirname, 'test1.txt')))
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err));

// // -----------------------------------------------
// // удаление файла

// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => 
//     fs.rm(path, {encoding: 'utf-8'}, (err) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve();
//     }))
// };

// // removeFileAsync(path.resolve(__dirname, 'test1.txt'))
// //     .then(() => console.log('File was removed'));

// //------------------------------------------------
// /* здесь мы используем переменную окружения TEXT которую
// задаем через cross-env записываем её значение в файл, 
// потом считаем кол-во слов в этом файле,
// записываем кол-во в другой файл

// если не работает cross-env TEXT='1 2 3 4 5 fff' node ./lessons/file-system.js
// нужно прописывать полный путь к cross-env, в данном случае
// ./node_modules/cross-env/src/bin/cross-env.js TEXT=...
// она потом стирается, кстати, почему-то. Уточнить.*/

// // const text = process.env.TEXT || '';

// // writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
// //     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
// //     .then(data => data.split(' ').length)
// //     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `It was ${count} words`))
// //     .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')));