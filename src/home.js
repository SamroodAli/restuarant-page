import { section, img } from "./tags.js";
import image from "./restuarant.jpg";

const home = () =>
  section([img("", "", {}, { src: image, alt: "Ratchets Restuarant image" })]);

export default home;
