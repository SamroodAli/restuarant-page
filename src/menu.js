import {
  section, ul, li, div, p, h1,
} from './tags.js';

const item = (food, cost) => li(div([p(food), p(cost)]), 'card');

const items = [
  item('Shawarma', '500'),
  item('Pizza', '900'),
  item('Fumpling', '100'),
  item('Falafel', '200'),
  item('Manthi', '100'),
  item('Shawarma', '100'),
];

const menu = () => section([h1("Today's menu"), ul(items)], 'menu-section');

export default menu;
