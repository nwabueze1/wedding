import { Arvo } from "@next/font/google";
import React from "react";
import Styles from "./Styles.module.scss";

const arvo = Arvo({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Paragraph({ children }) {
  return <p className={`${arvo.className} ${Styles.paragraph}`}>{children}</p>;
}
