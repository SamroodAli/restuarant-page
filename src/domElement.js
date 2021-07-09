import ele from "./element";

function html(...args) {
  console.log(args);
  args.reduce((ele1, ele2) => {
    if (Array.isArray(ele2)) {
      ele2.forEach((ele) => {
        ele1.appendChild(ele);
      });
    } else {
      ele1.appendChild(ele2);
    }
    return ele2;
  });
  return args[0];
}

export default html;
