import ele from "./element";

function html(...args) {
  console.log(args);
  args.reduce((ele1, ele2) => {
    ele1.appendChild(ele2);
    return ele2;
  });
}

export default html;
