import "bootstrap/dist/css/bootstrap.min.css";
import html from "./domElement";
import { h1, h2, h3, h4, h5, h6, p } from "./tags";

const content = document.getElementById("content");

html(content, [h1("Hello world"), p("Hello ")]);
