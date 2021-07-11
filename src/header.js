import { header, nav, a, button, span, div } from "./tags.js";
import { brand, navLinks } from "./navLink";

const hamburgerButton = button(
  span("", "navbar-toggler-icon"),
  "navbar-toggler",
  {},
  { type: "button", "data-toggle": "collapse", "data-target": "navbar" }
);

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
