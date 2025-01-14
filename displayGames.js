export default class loadList {
  constructor(data) {
    this.data = data;
  }

  render(build) {
    const container = build.createElement("h1");
    container.className = "games__header"
    container.innerText = "Games I would recommend";

    const list = build.createElement("ul");
    list.className = "games__list";
    container.append(list);

    this.data.forEach(a => {
      const items = build.createElement("li");
      items.className = "games__items";
      items.innerText = a.titel;
      list.append(items);
    });
    return container;
  }
}