import express from 'express';
import fs from 'fs/promises';

const app = express();

async function renderPage(res, page) {
  const templateBuf = await fs.readFile('./main.html');
  const templateText = templateBuf.toString();

  const indexBuf = await fs.readFile(`./${page}.html`);
  const indexText = indexBuf.toString();

  const outPutHtml = templateText.replace('%&BODY&%', indexText);

  res.send(outPutHtml);
}

app.get('/', async (req, res) => {
  renderPage(res, "index");
});

app.get('/books', async (req, res) => {
  renderPage(res, 'books');
})

app.get('/games', async (req, res) => {
  renderPage(res, 'games');
})

app.get('/coming', async (req, res) => {
  renderPage(res, 'coming');
})

app.use('/scr', express.static('./scr'));

app.listen(3080); 