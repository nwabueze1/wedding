import { Pacifico } from "@next/font/google";
import Styles from "./Styles.module.scss";

const oswald = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
export default function NormalTitle({ children }) {
  return <h4 className={`${oswald.className} ${Styles.title}`}>{children}</h4>;
}
