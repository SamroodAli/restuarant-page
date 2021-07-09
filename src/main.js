import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";
import { homeLink, menuLink, contactLink } from "./header";
import { section } from "./tags.js";

const main = section(home(), "", {}, { id: "main-section" });

homeLink.addEventListener("click", () => {
  const mainContent = document.getElementById("main-section");
  mainContent.innerHTML = "";
  mainContent.appendChild(home());
});

menuLink.addEventListener("click", () => {
  const mainContent = document.getElementById("main-section");
  mainContent.innerHTML = "";
  mainContent.appendChild(menu());
});

contactLink.addEventListener("click", () => {
  const mainContent = document.getElementById("main-section");
  mainContent.innerHTML = "";
  mainContent.appendChild(contact());
});

export default main;
