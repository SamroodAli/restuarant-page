import { section, img, h1, div, p } from "./tags.js";
import image from "./restuarant.jpg";

const description = "You haven't lived if you haven't tasted ratchets";

const home = section(
  [
    img("", "", {}, { src: image, alt: "Ratchets Restuarant image" }),
    div([h1("Welcome to Ratchets", "m-5"), p(description)]),
  ],
  "home-section"
);

export default home;
