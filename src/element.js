function element(element, innerHtml, className, styles, attributes) {
  const newElement = document.createElement(element);
  if (innerHtml) {
    newElement.innerHTML = innerHtml;
  }

  if (className) {
    className.split(" ").forEach((name) => newElement.classList.add(name));
  }

  if (styles) {
    for (const prop in styles) {
      newElement.style[prop] = styles[prop];
    }
  }

  if (attributes) {
    for (const key in attributes) {
      newElement.setAttribute(key, attributes[key]);
    }
  }
  return newElement;
}

export default element;
