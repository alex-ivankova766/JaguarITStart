// // Readable - чтение
// // Writable - запись
// // Duplex - чтение+запись
// // Transform - чтение+запись + может изменять данные по мере чтения

// // Стрим читает файл(и не только) по кусочкам, прочитал - отправил, прочитал - отправил.

// const fs = require('fs');
// const path = require('path');

// // fs.readFile(path.resolve(__dirname, "teoruya_vsego.fb2"), {encoding: 'utf-8'}, (err, data) => {
// //     if (err) {
// //         throw err;
// //     }
// //     console.log(data);
// // });

// //стрим для чтения файлов:

// // const stream = fs.createReadStream(path.resolve(__dirname, "teoruya_vsego.fb2"), {encoding: 'utf-8'});

// // // один чанк по дефолту 64кб
// // stream.on('data', (chunk) => {
// //     console.log(chunk);
// // })

// // stream.on('end', () => console.log("Закончили читать файл"));
// // stream.on('open', () => console.log("Начали читать файл"));
// // stream.on('error', (e) => console.log(e));

// // const writableStream = fs.createWriteStream(path.resolve(__dirname, "test2.txt"), {encoding: 'utf-8'});

// // for (let i = 0; i < 20; i++) {
// //     writableStream.write(i + '\n');
// // }

// // writableStream.end(); // все три килят стрим, но по разному, на каждый можно подписаться
// // writableStream.close();
// // writableStream.destroy();
// // writableStream.on('error');

// const http = require('http');

// http.createServer( (req, res) => {
//     //req - readable stream
//     //res - writable stream
//     const stream =  fs.createReadStream(path.resolve(__dirname, 'test2.txt'))

//     // стрим закончит читать раньше, чем поль-ль скачает
//     // stream.on('data', chunk => res.write(chunk));
//     // stream.on('end', chunk => res.end());

//     //нужно делать так:

//     stream.pipe(res);

// })