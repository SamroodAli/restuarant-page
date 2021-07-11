import { a } from "./tags";

export const brand = a(
  "Ratchets",
  "navbar-brand",
  { margin: "1rem 0.5rem" },
  { href: "#" }
);

const navLink = (link) =>
  a(
    link,
    "nav-item nav-link",
    { margin: "0 2rem", color: "black" },
    { href: "#" }
  );

export const homeLink = navLink("Home");
export const menuLink = navLink("Menu");
export const contactLink = navLink("Contact");
export const navLinks = [homeLink, menuLink, contactLink];
