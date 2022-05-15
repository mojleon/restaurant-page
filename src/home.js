import { forEach, map } from "lodash";
import Jumbotron from "./resource/pizza.jpg";

export class home {
  constructor() {
    this.restaurant = "TEST";
    this.body = document.querySelector("body");
    this.content = this.createContainer();
    this.images = this.importAll(
      require.context("./resource/pizza", false, /\.(png|jpe?g|svg)$/)
    );
    this.text = this.importAll(
      require.context("./resource/text", false, /\.(txt)$/)
    );
  }

  createContainer() {
    const container = document.createElement("div");
    container.id = "content";
    this.body.appendChild(container);
    return container;
  }

  importAll(r) {
    let files = {};
    r.keys().map((item, index) => {
      files[item.replace("./", "")] = r(item);
    });
    return files;
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
