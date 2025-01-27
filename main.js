import loadAPI from './loadAPI.js';
import loadBooks from './displayBooks.js';
import loadList from './displayGames.js';

const checkBooks = document.querySelector(".books");

if (checkBooks) {
  const backendBooks = new loadAPI("data/books.json");
  const books = await backendBooks.loadContent();

  const booksDisplay = new loadBooks(books);
  const elemBooks = booksDisplay.render(document);

  document.querySelector(".books").append(elemBooks);
}

const checkGames = document.querySelector(".games");

if (checkGames) {
  const backendGames = new loadAPI("data/games.json");
  const spel = await backendGames.loadContent();

  const gamesDisplay = new loadList(spel);
  const elemGames = gamesDisplay.render(document);

  document.querySelector(".games").append(elemGames);
}

