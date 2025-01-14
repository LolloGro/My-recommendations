import express from 'express';
import fs from 'fs/promises';

const app = express();

const menu = [
  {
    label: "Home",
    link: "/index",
    id: "index"
  },
  {
    label: "Books",
    link: "/books",
    id: "books"
  },
  {
    label: "Games",
    link: "/games",
    id: "games"
  },
  {
    label: "About",
    link: "/about",
    id: "about"
  }
];

async function renderPage(res, page) {
  const buf = await fs.readFile(`./${page}.html`);
  const text = buf.toString();

  const templateBuf = await fs.readFile('./main.html');
  const templateText = templateBuf.toString();

  const menuNav = menu.map((item) => {
    const className = item.id == page ? 'click' : 'inactive';
    return `<li><a class="${className}" href="${item.link}">${item.label}</a></li>`;
  });

  const menuText = menuNav.join('\n');

  const outPutHtml = templateText
    .replace('%&BODY&%', text)
    .replace('%&MENU&%', menuText);
  res.send(outPutHtml);
}

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