import "bootstrap/dist/css/bootstrap.min.css";
import {main,p} from "./tags" ;

const content = document.getElementById("content");
const mead = [main([
  p("HEllo world"),
  p("Hello world")
]),main("Hello"),main("Hello")]
content.append(...mead)

