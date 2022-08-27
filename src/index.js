import _, { get } from "lodash";
import "./style.css";
import { nav } from "./nav";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import { footer } from "./footer";

const cNav = new nav();
cNav.createNav();

const [hHome, homeContent, hMenu, hContact] = [
  document.getElementById("home"),
  document.getElementById("home-content"),
  document.getElementById("menu"),
  document.getElementById("contact"),
];

const sHome = new home();
const sMenu = new menu();
const sContact = new contact();
const sFooter = new footer();

hHome.addEventListener("click", () => {
  hideContent();
  document.getElementById("home-content").classList.remove("invinsible");
  changeLinkHover("home");
});

hMenu.addEventListener("click", () => {
  hideContent();
  document.getElementById("menu-content").classList.remove("invinsible");
  changeLinkHover("menu");
});

hContact.addEventListener("click", () => {
  hideContent();
  document.getElementById("contact-content").classList.remove("invinsible");
  changeLinkHover("contact");
});

function createHome() {
  sHome.createJumbotron();
  sHome.createInformationBlocks();
  sHome.createThumbnails();
  document.getElementById("home-content").appendChild(sFooter.createFooter());
}

function createMenu() {
  sMenu.createMenu();
  document.getElementById("menu-content").appendChild(sFooter.createFooter());
}

function createContact() {
  sContact.createContact();
  document
    .getElementById("contact-content")
    .appendChild(sFooter.createFooter());
}

function hideContent() {
  document.getElementById("home-content").classList.add("invinsible");
  document.getElementById("menu-content").classList.add("invinsible");
  document.getElementById("contact-content").classList.add("invinsible");
}

function changeLinkHover(link) {
  document.getElementById("home").classList.remove("selected");
  document.getElementById("menu").classList.remove("selected");
  document.getElementById("contact").classList.remove("selected");
  document.getElementById(link).classList.add("selected");
}

function showContent() {
  if (document.location.href.includes("HOME")) {
    document.getElementById("home-content").classList.remove("invinsible");
    changeLinkHover("home");
  }
  if (document.location.href.includes("MENU")) {
    document.getElementById("menu-content").classList.remove("invinsible");
    changeLinkHover("menu");
  }
  if (document.location.href.includes("CONTACT")) {
    document.getElementById("contact-content").classList.remove("invinsible");
    changeLinkHover("contact");
  }
}

createHome();
createMenu();
createContact();
hideContent();
showContent();
