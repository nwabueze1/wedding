import Hero from "../../sections/Hero";
import Navbar from "../../navigation/Navbar";
import Block from "../../Block";
import { Pacifico, Oswald } from "@next/font/google";
import Styles from "./Welcome.module.scss";
import NormalTitle from "../../TitleNormal";
import Paragraph from "../../Paragraph";
import BlockHeader from "../../BlockHeader";
import Card from "../../Card";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({ subsets: ["latin"] });

export default function WelcomePage() {
  return (
    <main>
      <Hero>
        <Navbar />
        <h1 className={`${pacifico.className} ${Styles.heading}`}>Save </h1>
        <h1 className={`${pacifico.className} ${Styles.heading}`}>the date</h1>
        <h2 className={`${pacifico.className} ${Styles.heading}`}>
          - 19<span>.</span>12<span>.</span>16 -{" "}
        </h2>
        <p className={`${oswald.className} ${Styles.paragraph}`}>
          *** We are gettin married ***
        </p>
      </Hero>
      <Block>
        <BlockHeader>
          <NormalTitle>The happy couple</NormalTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            amet. Eos et tenetur reiciendis eius. Cumque libero ratione vel nisi
            mollitia quod in hic nostrum est doloribus, vero animi ipsum!
          </Paragraph>
        </BlockHeader>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card imageSrc={"/images/him2.jpg"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dignissimos iusto vero cumque architecto ullam expedita libero,
            sapiente quisquam qui consequatur porro nemo pariatur unde aliquid
            est minima nostrum adipisci voluptas vitae eaque. Consequatur
            aperiam, possimus mollitia adipisci maxime quae. Reprehenderit quis
            minus modi odio.
          </Card>
          <Card imageSrc={"/images/her2.jpg"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dignissimos iusto vero cumque architecto ullam expedita libero,
            sapiente quisquam qui consequatur porro nemo pariatur unde aliquid
            est minima nostrum adipisci voluptas vitae eaque. Consequatur
            aperiam, possimus mollitia adipisci maxime quae. Reprehenderit quis
            minus modi odio.
          </Card>
        </div>
      </Block>
    </main>
  );
}
