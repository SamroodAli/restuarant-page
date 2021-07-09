import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import pageHeader from "./header.js";
import home from "./home.js";

const content = document.getElementById("content");

content.append(pageHeader(), home());
