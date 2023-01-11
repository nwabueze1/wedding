import Paragraph from "../Paragraph";
import CardImage from "./CardImage";
import Styles from "./Styles.module.scss";

export default function Card({
  children,
  imageSrc,
  imageHeiht,
  imageWidth,
  width,
}) {
  return (
    <article
      className={Styles.card}
      style={{ width: width ? width : imageWidth }}
    >
      <CardImage height={imageHeiht} src={imageSrc} width={imageWidth} />
      <div style={{ background: "white", padding: "10px" }}>{children}</div>
    </article>
  );
}
