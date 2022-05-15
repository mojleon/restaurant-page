import _, { get } from "lodash";
import "./style.css";
import { home } from "./home";

const sHome = new home();

addEventListener("load", () => {
  if (location.hash === "#home" || location.hash === "") {
    sHome.createNav();
    sHome.createJumbotron();
    sHome.createText();
    sHome.createFooter();
  }
});
