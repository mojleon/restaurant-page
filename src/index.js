import _, { get } from "lodash";
import "./style.css";
import Icon from "./resource/logo.svg";
import Jumbotron from "./resource/pizza.jpg";
import Text from "./resource/text.txt";

class restaurantPage {
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

    navLinks.map((link) => {
      const nav = this.content.getElementsByTagName("nav")[0];
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

  createText() {
    const TEXTDIV = document.createElement("div");
    TEXTDIV.classList.add("text");
    TEXTDIV.innerHTML = Text;

    const IMAGE = document.createElement("img");
    IMAGE.src = Icon;
    TEXTDIV.appendChild(IMAGE);

    this.content.appendChild(TEXTDIV);
  }

  createFooter() {
    const FOOTER = document.createElement("footer");
    FOOTER.innerHTML = "&copy; 2022 Restaurant";
    this.content.appendChild(FOOTER);
  }
}

const restaurant = new restaurantPage();

restaurant.createNav();
restaurant.createJumbotron();
restaurant.createText();
restaurant.createFooter();
