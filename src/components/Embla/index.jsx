import React from "react";
import EmblaCarousel from "./EmblaCarousel";

import "./css/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Embla = () => <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
export default Embla;
