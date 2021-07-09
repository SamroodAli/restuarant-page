import ele from "./element";

function domElement(parent, [...args]) {
  const newElement = ele(...args);
  parent.appendChild(newElement);
}
