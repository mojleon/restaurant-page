import _, { get } from "lodash";
import "./style.css";
import { setuppage } from "./setuppage";

const setup = new setuppage();

setup.createNav();
setup.createJumbotron();
setup.createText();
setup.createLine();
setup.createText(true);
setup.createFooter();
