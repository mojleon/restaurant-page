import _, { get } from "lodash";
import "./style.css";
import { nav } from "./nav";
import { home } from "./home";

const cNav = new nav();
cNav.createNav();

const [hHome, hMenu, hContact] = [
  document.getElementById("home"),
  document.getElementById("menu"),
  document.getElementById("contact"),
];

const sHome = new home();

hHome.addEventListener("click", () => {
  sHome.createJumbotron();
  sHome.createText();
  sHome.createFooter();
});

hMenu.addEventListener("click", () => {
  console.log("menu");
});

hContact.addEventListener("click", () => {
  console.log("contact");
});

// removeElement(document.getElementById("nav"));
