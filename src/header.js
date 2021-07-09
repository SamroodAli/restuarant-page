import { header, nav, ul, li, a } from "./tags";

const aStyle = {
  color: "black",
  textDecoration: "none",
};

const navLinks = [
  li(a("Home", "", aStyle, { href: "#" })),
  li(a("Menu", "", aStyle, { href: "#" })),
  li(a("Contact", "", aStyle, { href: "#" })),
];

const pageHeader = () => {
  return header(nav(ul(navLinks)));
};

export default pageHeader;
