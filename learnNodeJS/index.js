// const http = require('http');
// const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
// const Router = require('./framework/Router');
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const parserJSON = require('./framework/parseJson');
// const bodyParser = require('./framework/bodyParser');
const parseURL = require('./framework/parseURL');


// своя реализация чего-то по типу express:

// const emitter = new EventEmitter();

//--------------------
//создали в отдельном файле
// const router = new Router();

const app = new Application();

//----------------------
//тоже в том же отдельном файле на экспорт

// router.get('/users', (req, res) => {
//     res.end('YOU SEND REQUEST TO /USERS');
// })

// router.get('/posts', (req, res) => {
//     res.end('YOU SEND REQUEST TO /POSTS');
// })

// app.addRouter(router);
app.use(parserJSON);
app.use(parseURL('http://localhost:5000'));
// app.use(bodyParser);
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));

// const server = http.createServer(
    // res.writeHead(200, {
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    // res.end("<h1>Hello, привет</h1>");

    // чтобы отправлять данные в фоормате JSON:
    // но обычно так не делается, используют фреймворки express, nest js and another

    // res.writeHead(200, {
    //     "Content-Type": 'application/json'
    // })

    // if (req.url === '/users') {
    //     return res.end(JSON.stringify([
    //         {id: 1, name: 'Ulbi tv'}
    //     ])); 
    // }
    // if (req.url === '/posts') {
    //     return res.end('POSTS'); // закрыли стрим и передали данные, чтобы поль-ль мог получить ответ от сервера
    // }

    // ----------------------------------------------
    //NEW (своя реализация чего-то по типу express:)
    

    //-----------------------------------------------
    //res.end(req.url); // закрыли стрим и передали данные, чтобы поль-ль мог получить ответ от сервера
// );

// server.listen(PORT, () => console.log(`Server start on port ${PORT}`)); // начать слушать входящие соединения