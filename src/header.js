import { header, nav, ul, li, a, button } from "./tags";

const navBar = [
  a(
    "Ratchets Fried Chicken",
    "navbar-brand",
    { margin: "1rem 0.5rem" },
    { href: "#" }
  ),
  button(
    "",
    "navbar-toggle",
    {},
    { type: "button", "data-toggle": "collapse", "data-target": "navbar" }
  ),
];

const pageHeader = () => {
  return header(nav(navBar, "navbar navbar-expand-lg navbar-light bg-light"));
};

export default pageHeader;
