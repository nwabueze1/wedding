import React from "react";
import Styles from "./Styles.module.scss";

export default function CardButton({ children }) {
  return <a className={Styles.button}>{children}</a>;
}
