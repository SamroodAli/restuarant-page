import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";
import { homeLink, menuLink, contactLink } from "./header";

const homePage = home();
const contactPage = contact();
const menuPage = menu();

const main = () => contact();

export default main;
