import { header, nav, a, button, span, div } from "./tags.js";

const hamburgerButton = button(
  span("", "navbar-toggler-icon"),
  "navbar-toggler",
  {},
  { type: "button", "data-toggle": "collapse", "data-target": "navbar" }
);

const brand = a(
  "Ratchets Fried Chicken",
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

const navLinks = [navLink("Home"), navLink("Menu"), navLink("Contact")];

const navLinksContainer = div(
  div(navLinks, "navbar-nav"),
  "collapse navbar-collapse",
  {},
  { id: "navbar" }
);

const navBarItems = [brand, navLinksContainer, hamburgerButton];

const pageHeader = () =>
  header(nav(navBarItems, "navbar navbar-expand-lg navbar-light bg-light"));

export default pageHeader;
