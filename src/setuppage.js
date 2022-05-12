import Icon from "./resource/logo.svg";
import Jumbotron from "./resource/pizza.jpg";
import Text from "./resource/text.txt";

export class setuppage {
  constructor() {
    this.restaurant = "TEST";
    this.content = document.querySelector("#content");
  }

  createNav() {
    const navLinks = [
      "WELCOME",
      "ABOUT US",
      "MENU",
      "LOGO",
      "STORY",
      "CONTACT",
      "BUY NOW",
    ];

    const logo = document.createElement("img");
    logo.src = Icon;
    logo.classList.add("logo");

    const nav = document.createElement("nav");
    navLinks.map((link) => {
      if (link === "LOGO") {
        nav.appendChild(logo);
      } else {
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.innerHTML = link;
        navLink.href = `#${link}`;
        nav.appendChild(navLink);
      }
    });
    this.content.append(nav);
  }

  createJumbotron() {
    const jumbotron = document.createElement("div");
    jumbotron.classList.add("jumbotron");

    const image = document.createElement("img");
    image.src = Jumbotron;
    jumbotron.append(image);

    const jumbotronContent = document.createElement("div");
    jumbotronContent.classList.add("jumbotron-content");

    const header = document.createElement("h1");
    header.innerHTML = "Welcome to our restaurant.";
    jumbotronContent.append(header);

    const reserveButton = document.createElement("button");
    reserveButton.innerHTML = "Reserve a table";
    jumbotronContent.append(reserveButton);

    jumbotron.appendChild(jumbotronContent);
    this.content.appendChild(jumbotron);
  }

  createText(reverseGrid = false) {
    const TEXTDIV = document.createElement("div");
    TEXTDIV.classList.add("text");
    if (reverseGrid) TEXTDIV.classList.add("reverseGrid");
    TEXTDIV.innerHTML = Text;

    const IMAGE = document.createElement("img");
    IMAGE.src = Icon;
    TEXTDIV.appendChild(IMAGE);

    this.content.appendChild(TEXTDIV);
  }

  createLine() {
    const LINE = document.createElement("hr");
    this.content.appendChild(LINE);
  }

  createFooter() {
    const FOOTER = document.createElement("footer");
    FOOTER.innerHTML = "&copy; 2022 Restaurant";
    this.content.appendChild(FOOTER);
  }
}
