export class contact {
  constructor() {
    this.body = document.querySelector("body");
  }

  createContact() {
    const content = document.createElement("div");
    content.id = "contact-content";
    content.innerHTML = "Contact";
    this.body.appendChild(content);
  }
}
