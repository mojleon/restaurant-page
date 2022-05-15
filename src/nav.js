import Icon from "./resource/logo.svg";

export class nav {
  constructor() {
    this.content = document.querySelector("body");
  }

  createNav() {
    const navLinks = ["HOME", "MENU", "CONTACT"];

    const logo = document.createElement("img");
    logo.src = Icon;
    logo.classList.add("logo");

    const nav = document.createElement("nav");
    nav.appendChild(logo);

    const links = document.createElement("div");
    links.classList.add("links");
    navLinks.map((link) => {
      if (link === "LOGO") {
      } else {
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.innerHTML = link;
        navLink.id = link.toLowerCase();
        navLink.href = `#${link}`;
        links.appendChild(navLink);
      }
    });
    nav.appendChild(links);
    this.content.append(nav);
  }
}
