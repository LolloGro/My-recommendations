import loadAPI from "./loadAPI.js";

const backendNav = new loadAPI("data/nav.json");
const menuNav = await backendNav.loadContent();

