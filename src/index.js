import "bootstrap/dist/css/bootstrap.min.css";
import ele from "./element";
const h1 = ele("h1", "Hello world", "bg-primary", {
  color: "red",
  backgroundColor: "green",
  border: "10px solid black",
});
document.getElementById("content").appendChild(h1);
