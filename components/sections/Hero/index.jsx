import Styles from "./Styles.module.scss";

export default function Hero({ children }) {
  return <div className={Styles.hero}>{children}</div>;
}
