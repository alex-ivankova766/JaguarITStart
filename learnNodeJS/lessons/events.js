// const Emitter = require('events');

// const emitter = new Emitter();

// // создаем своё пользовательское событие (многоразовое):
// emitter.on('message', (data, second, third) => {
// // если нужна реакция ЕДИНОЖДЫ то юзаем .once()
//     if (data) {
//         console.log(`Вы прислали сообщение ${data}`);
//     }
//     if (second) {
//         console.log(`Второй аргумент ${second}`);
//     }
//     if (third) {
//         console.log(`Третий аргумент ${third}`);
//     }
// });

// // ./node_modules/cross-env/src/bin/cross-env.js message="That is my message" node ./lessons/events.js
// const MESSAGE = process.env.message || '';

// if (MESSAGE) {
//     // генерируем событие (название, data, second)
//     emitter.emit('message', MESSAGE, 123, 456);
// } else {
//     emitter.emit('message', 'Вы не передали сообщение');
// }

// /* ИСПОЛЬЗОВАНИЕ: 
// При создании http серверов, 
// При обмене сообщениями
// При генерации событий на определённое действие
// В websocket
// В кластеризации
// КОНЦЕПЦИЯ СОБЫТИЙНО-ОРИЕНТИРОВАННОЙ МОДЕЛИ
// ДЕЙСТВИЕ - СОБЫТИЕ*/

// emitter.removeAllListeners(); //удалить все слушатели
// emitter.removeListener("название слушателя", "$колбэк"); //удалить конкретный слушатель

// // В таком случае, колбэк лучше вынести в отдельную переменную:

// const callback = (data, second, third) => {
//     // если нужна реакция ЕДИНОЖДЫ то юзаем .once()
//     if (data) {
//         console.log(`Вы прислали сообщение ${data}`);
//     }
//     if (second) {
//         console.log(`Второй аргумент ${second}`);
//     }
//     if (third) {
//         console.log(`Третий аргумент ${third}`);
//     }
// };

// emitter.once('anotherMessage', callback);