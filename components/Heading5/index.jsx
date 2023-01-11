import { Oswald } from "@next/font/google";
import Styles from "./Styles.module.scss";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});
export default function Heading5({ children }) {
  return (
    <h4 className={`${oswald.className} ${Styles.heading5}`}>{children}</h4>
  );
}
