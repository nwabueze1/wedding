import Link from "next/link";
import React from "react";
import Styles from "./Styles.module.scss";

export default function NavListItem({ href = "/", children }) {
  return (
    <li className={Styles.navlist_item}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
