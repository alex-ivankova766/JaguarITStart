
const Application = require('./framework/Application');
const filmRouter = require('./src/filmRouter');
const genreRouter = require('./src/genreRouter');

const parserJSON = require('./framework/parseJson');
const parseURL = require('./framework/parseURL');
const bodyParser = require('./framework/bodyParser')

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(parserJSON);
app.use(parseURL('http://localhost:5000'));
app.use(bodyParser);

app.addRouter(filmRouter);
app.addRouter(genreRouter);

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));