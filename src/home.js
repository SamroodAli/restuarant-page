import { section, img, h1, div } from "./tags.js";
import image from "./restuarant.jpg";

const home = () =>
  section(
    [
      img("", "", {}, { src: image, alt: "Ratchets Restuarant image" }),
      div(h1("Welcome to Ratchets", "m-5")),
    ],
    "home-section"
  );

export default home;
