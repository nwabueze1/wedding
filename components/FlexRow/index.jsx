import Styles from "./Styles.module.scss";
export default function FlexRow({ children }) {
  return <div className={Styles.flex}>{children}</div>;
}
