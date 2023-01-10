import React from "react";
import Styles from "./Styles.module.scss";

export default function Navlist({children}) {
  return <ul className={Styles.navlist}>{children}</ul>;
}
