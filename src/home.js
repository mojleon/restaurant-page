import { forEach, map } from "lodash";
import Icon from "./resource/logo.svg";
import Jumbotron from "./resource/pizza.jpg";

export class home {
  constructor() {
    this.restaurant = "TEST";
    this.content = document.querySelector("#content");
    this.images = this.importAll(
      require.context("./resource/pizza", false, /\.(png|jpe?g|svg)$/)
    );
    this.text = this.importAll(
      require.context("./resource/text", false, /\.(txt)$/)
    );
  }

  importAll(r) {
    let files = {};
    r.keys().map((item, index) => {
      files[item.replace("./", "")] = r(item);
    });
    return files;
  }

  createNav() {
    const navLinks = ["LOGO", "HOME", "MENU", "CONTACT"];

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

  createText() {
    console.log("test");
    for (let i = 1; i <= 3; i++) {
      const TEXTDIV = document.createElement("div");
      TEXTDIV.classList.add("text");
      if (i % 2 === 0) TEXTDIV.classList.add("reverseGrid");
      TEXTDIV.innerHTML = this.text[`${i}.txt`].default;

      const IMAGE = document.createElement("img");
      IMAGE.src = this.images[`${i}.jpg`];
      TEXTDIV.appendChild(IMAGE);

      this.content.appendChild(TEXTDIV);

      if (i < 3) this.createLine();
    }
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
