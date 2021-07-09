function element(element, innerHtml, className, attributes) {
  const newElement = document.createElement(element);
  if (innerHtml) {
    newElement.innerHTML = innerHtml;
  }

  if (className) {
    className.split(" ").forEach((name) => newElement.classList.add(name));
  }

  if (attributes) {
    for (const { key, value } of attributes) {
      newElement.setAttribute(key, value);
    }
  }
}

export default element;
