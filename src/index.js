import _, { get } from "lodash";
import "./style.css";
import { nav } from "./nav";
import { home } from "./home";

const cNav = new nav();
cNav.createNav();

const sHome = new home();

// const HOME = getElementById("home");

sHome.createJumbotron();
sHome.createText();
sHome.createFooter();
