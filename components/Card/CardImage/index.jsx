import Image from "next/image";
import CardButton from "../CardButon/Index";
import Styles from "./Styles.module.scss";

export default function CardImage({ src = "", width = 450, height = 450 }) {
  return (
    <div>
      <Image
        src={src}
        alt=""
        height={height}
        width={width}
        className={Styles.image}
      />
      <CardButton>See more</CardButton>
    </div>
  );
}
