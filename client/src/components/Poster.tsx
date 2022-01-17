import type { HTMLProps } from "react";
import React from "react";

import noPoster from "../assets/no-poster-available.jpg";

const Poster: React.FC<HTMLProps<HTMLImageElement>> = ({ src }) => {
  return <img src={src === "N/A" ? noPoster : src} alt="poster" />;
};

export default Poster;
