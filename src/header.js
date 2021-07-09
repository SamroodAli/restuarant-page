import { header, nav, a, button, span, div } from "./tags";

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

const navLinks = div(
  div([], "navbar-nav"),
  "collapse navbar-collapse",
  {},
  { id: "navbar" }
);

const navBarItems = [brand, hamburgerButton];
const navBarClass = "navbar navbar-expand-lg navbar-light bg-light";

const pageHeader = () => {
  return header(nav(navBarItems, navBarClass));
};

export default pageHeader;
