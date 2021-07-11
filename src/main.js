import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";
import { homeLink, menuLink, contactLink } from "./navLink";
import navBar from "./header.js";
import { main, section } from "./tags.js";

const changeTabTo = (tab) => {
  return () => {
    const mainContent = document.getElementById("main-section");
    mainContent.innerHTML = "";
    mainContent.appendChild(tab);
  };
};

homeLink.addEventListener("click", changeTabTo(home));
menuLink.addEventListener("click", changeTabTo(menu));
contactLink.addEventListener("click", changeTabTo(contact));

const bodySection = section(home, "", {}, { id: "main-section" });
const restuarantPage = main([navBar, bodySection]);
export default restuarantPage;
