import Styles from "./Styles.module.scss";

export default function index({ children, nobackground }) {
  return (
    <section
      className={`${Styles.block} ${nobackground ? "" : Styles.background}`}
    >
      {children}
    </section>
  );
}
