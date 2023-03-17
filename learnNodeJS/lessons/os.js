// const os = require('os');
// const cluster = require('cluster');

// console.log(os.platform()); //текущая ОС
// console.log(os.arch()); // архитектура процессора
// console.log(os.cpus()); // ядра процессора
// console.log(os.cpus().length); // количество ядер

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 6; i ++) {
//         cluster.fork();
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Воркер с pid = ${process.pid} умер`);
//         //if (code === )... чаще всего это есть в библиотеках
//         cluster.fork();
//     })
// } else {
//     console.log(`Воркер с pid = ${process.pid} запущен`);

//     setInterval( () => {
//         console.log(`Воркер с pid = ${process.pid} все еще работает`);
//     }, 5000)
// };

// const cpus = os.cpus();

// for (let i = 0; i < cpus.length - 2; i++) {
//     const CPUcore = cpus[i];
//     console.log('Запустить ещё один node js процесс')
// }


// console.log(process.pid);


