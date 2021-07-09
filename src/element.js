function element(element, innerHtml, className, styles, attributes) {
  const newElement = document.createElement(element);

  if (Array.isArray(innerHtml)) {
    newElement.append(...innerHtml)
  } else if (innerHtml) {
    newElement.innerText = (innerHtml)
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
