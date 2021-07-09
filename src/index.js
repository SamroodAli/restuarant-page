import "bootstrap/dist/css/bootstrap.min.css";
import { h1, h2, h3, h4, h5, h6, p, ul, li, div } from "./tags";

const content = document.getElementById("content");

// html(content, [h1("hello h1 tag"), p("Hello p tag"), ul()]);
// content.appendChild(h1("Hello world"));
content.appendChild(
  div([
    h1("Hello h1 tag"),
    p("Hello p tag"),
    ul([li("Item1"), li("Item2"), li("Item3")]),
  ])
);
