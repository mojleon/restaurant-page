import text from "./resource/menu/1.txt";

export class menu {
  constructor() {
    this.body = document.querySelector("body");
  }

  createMenu() {
    const content = document.createElement("div");
    content.id = "menu-content";
    content.innerHTML = text;
    this.body.appendChild(content);
  }
}
