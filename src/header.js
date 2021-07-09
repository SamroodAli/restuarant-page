import { header, nav, ul, li, a } from "./tags";

const navBar = [
  a(
    "Ratchets Fried Chicken",
    "navbar-brand",
    { margin: "1rem 0.5rem" },
    { href: "#" }
  ),
];

const pageHeader = () => {
  return header(nav(navBar, "navbar navbar-expand-lg navbar-light bg-light"));
};

export default pageHeader;
