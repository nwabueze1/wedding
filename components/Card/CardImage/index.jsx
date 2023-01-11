import Image from "next/image";
import CardButton from "../CardButon/Index";
import Styles from "./Styles.module.scss";

export default function CardImage({ src = "", width = 450, height = 450 }) {
  return (
    <div className={Styles.image_container}>
      <Image
        src={src}
        alt=""
        height={height}
        width={width}
        className={Styles.image}
      />
      {/* <CardButton>See more</CardButton> */}
      {/* <div className={Styles.border_line}></div> */}
    </div>
  );
}
