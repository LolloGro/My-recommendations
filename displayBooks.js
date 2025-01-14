export default class loadBooks {
  constructor(data) {
    this.data = data;
  }

  render(build) {
    const container = build.createElement("h1");
    container.className = "books__header"
    container.innerText = "Books I would recommend";

    const list = build.createElement("ul");
    list.className = "books__list";
    container.append(list);

    this.data.forEach(a => {
      const items = build.createElement("li");
      items.className = "books__items";
      items.innerText = a.titel;
      list.append(items);
    });
    return container;
  }
}