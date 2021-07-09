function element(element, innerHtml, className, styles, attributes) {
  const newElement = document.createElement(element);
  if (innerHtml) {
    newElement.innerHTML = innerHtml;
  }

  if (className) {
    newElement.className = className;
  }

  if (styles) {
    Object.assign(newElement.style, styles);
  }

  if (attributes) {
    for (const key in attributes) {
      newElement.setAttribute(key, attributes[key]);
    }
  }
  return newElement;
}

export default element;