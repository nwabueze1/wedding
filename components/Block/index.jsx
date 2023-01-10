import Styles from "./Styles.module.scss"


export default function index({ children }) {
  return <section className={Styles.block}>{children}</section>;
}
