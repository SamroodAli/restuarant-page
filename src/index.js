import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import header from "./header.js";
import main from "./main.js";

const content = document.getElementById("content");

content.append(header(), main());
