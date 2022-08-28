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
      require.context("./resource/home", false, /\.(txt)$/)
    );
    this.slider = this.importAll(
      require.context("./resource/slider", false, /\.(png|jpe?g|svg)$/)
    );
  }

  importAll(r) {
    let files = {};
    r.keys().map((item, index) => {
      files[item.replace("./", "")] = r(item);
    });
    return files;
  }

  createContainer() {
    const container = document.createElement("div");
    container.id = "home-content";
    this.body.appendChild(container);
    return container;
  }

  createJumbotron() {
    const jumbotron = document.createElement("div");
    jumbotron.classList.add("jumbotron");

    const jumbotronContent = document.createElement("div");
    jumbotronContent.classList.add("jumbotron-content");

    const header = document.createElement("h1");
    header.innerHTML = "Welcome to the Segreto restaurant.";
    jumbotronContent.append(header);

    const reserveButton = document.createElement("button");
    reserveButton.innerHTML = "Reserve a table";
    jumbotronContent.append(reserveButton);

    jumbotron.appendChild(jumbotronContent);
    this.content.appendChild(jumbotron);
  }

  createInformationBlocks() {
    for (let i = 1; i <= 2; i++) {
      const DIV = document.createElement("div");
      DIV.classList.add("block");
      const INNERDIV = document.createElement("div");
      if (i % 2 === 0) DIV.classList.add("reverseGrid");
      INNERDIV.innerHTML = this.text[`${i}.txt`].default;
      DIV.appendChild(INNERDIV);

      const IMAGEDIV = document.createElement("div");
      const IMAGE = document.createElement("img");
      IMAGE.src = this.images[`${i}.jpg`];
      IMAGEDIV.appendChild(IMAGE);
      DIV.appendChild(IMAGEDIV);

      this.content.appendChild(DIV);
      this.createLine();
    }
  }

  createThumbnails() {
    const DIV = document.createElement("div");
    DIV.classList.add("thumbnails");
    DIV.innerHTML = this.text[`2.txt`].default;

    for (let i = 1; i <= 9; i++) {
      const IMAGEDIV = document.createElement("div");
      const IMAGE = document.createElement("img");
      IMAGE.src = this.slider[`${i}.jpg`];
      IMAGEDIV.appendChild(IMAGE);
      DIV.appendChild(IMAGEDIV);
      this.content.appendChild(DIV);
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
