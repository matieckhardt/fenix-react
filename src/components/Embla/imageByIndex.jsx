import image1 from "./images/slide-1.jpg";
import image2 from "./images/slide-2.jpg";

export const images = [image1, image2];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
