import Paragraph from "../Paragraph";
import CardImage from "./CardImage";
import Styles from "./Styles.module.scss";

export default function Card({ children, imageSrc, imageHeiht, imageWidth }) {
  return (
    <article className={Styles.card}>
      <CardImage height={imageHeiht} src={imageSrc} width={imageWidth} />
      <Paragraph>{children}</Paragraph>
    </article>
  );
}
