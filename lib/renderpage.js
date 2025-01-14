
import { response } from 'express';
import fs from 'fs/promises';

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

export default async function renderPage(response, page) {

  response.render(page, {
    menuItems: menu.map((item) => {
      return {
        label: item.label,
        link: item.link,
        active: item.id == page,
      };
    })
  });
}