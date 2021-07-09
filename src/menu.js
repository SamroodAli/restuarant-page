import { section, ul, li, div, p } from "./tags.js";

const item = (food, cost) => li(div([p(food), p(cost)]), "card");

const items = [
  item("chicken", "500"),
  item("pizza", "900"),
  item("dumpling", "100"),
];

const menu = () => section(ul(items), "menu-section");

export default menu;
