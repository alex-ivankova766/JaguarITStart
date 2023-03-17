// const dotenv = require('dotenv'); через npm install dotenv получили возможность забирать значения из .env
// console.log(dotenv.config()); просмотр этих значений в консоли

// console.log(process.env.PORT); это значение должно быть задано, либо в package.json либо в .env
// console.log(process.env.NODE_ENV); то же, что и с портом

// console.log(process.pid); id процесса

// console.log(process.argv) массив из команд, написанных после node process.js

// if(Math.random() > 0.5) {    здесь рассматривается возможность зацикливания и прерывания выполнения от условия 
//     while (true) {

//     }
// } else {
//     console.log("Running is over");
//     process.exit();
// }

console.log(process.pid);