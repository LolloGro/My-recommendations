export default class loadAPI {
  constructor(urlAPI) {
    this.urlAPI = urlAPI;
  }

  async loadContent() {
    try {
      const url = this.urlAPI;
      const response = await fetch(url);
      if (!response.ok) {
        throw new error('Could not fetch data');
      }
      const content = await response.json();
      return content;
    }
    catch (error) {
      console.log(error);
    }
  }
}

