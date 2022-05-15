import Icon from "./resource/logo.svg";

export class nav {
  constructor() {
    this.content = document.querySelector("#content");
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
        navLink.id = link.toLowerCase();
        navLink.href = `#${link}`;
        nav.appendChild(navLink);
      }
    });
    this.content.append(nav);
  }
}
