import express from 'express';
import renderPage from './lib/renderpage.js';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', async (req, res) => {
  renderPage(res, "index");
});

app.get('/index', async (req, res) => {
  renderPage(res, 'index');
})

app.get('/books', async (req, res) => {
  renderPage(res, 'books');
})

app.get('/games', async (req, res) => {
  renderPage(res, 'games');
})

app.get('/about', async (req, res) => {
  renderPage(res, 'about');
})

app.use('/', express.static('./'));

app.listen(3080); 
