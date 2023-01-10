import React from "react";
import Styles from "./Styles.module.scss";

export default function BlockHeader({ children }) {
  return <header className={Styles.header}>{children}</header>;
}
