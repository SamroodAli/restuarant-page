import "bootstrap/dist/css/bootstrap.min.css";
import ele from "./element";
import html from "./domElement";
const content = document.getElementById("content");
const p = ele("p", "Hello world", "bg-primary", {
  color: "red",
  backgroundColor: "green",
  border: "10px solid black",
});
const p2 = ele("p", "Hello world", "bg-primary", {
  color: "red",
  backgroundColor: "green",
  border: "10px solid black",
});
html(content, p, p2);
