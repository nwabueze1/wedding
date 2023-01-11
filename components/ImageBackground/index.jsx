import React from "react";
import Styles from "./Styles.module.scss";

export default function ImageBackground({ image = "", children }) {
  return (
    <div
      className={Styles.image_background}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}
