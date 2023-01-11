import Hero from "../../sections/Hero";
import Navbar from "../../navigation/Navbar";
import Block from "../../Block";
import { Pacifico, Oswald } from "@next/font/google";
import Styles from "./Welcome.module.scss";
import NormalTitle from "../../TitleNormal";
import Paragraph from "../../Paragraph";
import BlockHeader from "../../BlockHeader";
import Card from "../../Card";
import ImageBackground from "../../ImageBackground";
import FlexRow from "../../FlexRow";
import FlexColumn from "../../FlexColumn";
import Heading5 from "../../Heading5";

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
        <h1 className="curve text--upper">Save </h1>
        <h1 className="curve text--upper">the date </h1>
        <h2 className={`${pacifico.className} ${Styles.heading}`}>
          - 19<span>.</span>12<span>.</span>16 -{" "}
        </h2>
        <p className={`${oswald.className} ${Styles.paragraph}`}>
          *** We are getting married ***
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card imageSrc={"/images/him2.jpg"}>
            <Paragraph>
              <b>Mr. James Doe</b> sit amet consectetur adipisicing elit. Ipsam
              dignissimos iusto vero cumque architecto ullam expedita libero,
              sapiente quisquam qui consequatur porro nemo pariatur unde aliquid
              est minima nostrum adipisci voluptas vitae eaque. Consequatur
              aperiam, possimus mollitia adipisci maxime quae. Reprehenderit
              quis minus modi odio.
            </Paragraph>
          </Card>
          <Card imageSrc={"/images/her2.jpg"}>
            <Paragraph>
              <b>Miss Mary Doe</b> sit amet consectetur adipisicing elit. Ipsam
              dignissimos iusto vero cumque architecto ullam expedita libero,
              sapiente quisquam qui consequatur porro nemo pariatur unde aliquid
              est minima nostrum adipisci voluptas vitae eaque. Consequatur
              aperiam, possimus mollitia adipisci maxime quae. Reprehenderit
              quis minus modi odio.
            </Paragraph>
          </Card>
        </div>
      </Block>
      <section>
        <ImageBackground image="/images/parallax-image-1a.jpg">
          <Block nobackground>
            <BlockHeader>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p
                  className={`${oswald.className} ${Styles.paragraph}`}
                  style={{ width: 400 }}
                >
                  *** AT ECKO HOTELS LAGOS ISLAND ***
                </p>
                <h1 className={`${pacifico.className} ${Styles.heading}`}>
                  Counting{" "}
                </h1>
                <h1 className={`${pacifico.className} ${Styles.heading}`}>
                  Down{" "}
                </h1>
              </div>
            </BlockHeader>
          </Block>
        </ImageBackground>
      </section>
      <Block>
        <BlockHeader>
          <NormalTitle>The Wedding</NormalTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            quasi fugit dignissimos at et labore architecto consectetur modi
            impedit ut eum similique quam, unde eligendi iure aperiam, tempore,
            sapiente minima!
          </Paragraph>
        </BlockHeader>
        <FlexRow>
          <Card
            imageSrc={"/images/the-wedding-1a.jpg"}
            imageHeiht={300}
            imageWidth={300}
          >
            <Heading5>LOCATION</Heading5>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus ratione autem vero officiis voluptates officia odit
              magnam pariatur, tempora nulla! Inventore atque autem sapiente!
              Pariatur vitae necessitatibus omnis voluptates! Optio id aperiam
              cum animi excepturi!
            </Paragraph>
          </Card>
          <Card
            imageSrc={"/images/the-wedding-4a.jpg"}
            imageHeiht={300}
            imageWidth={300}
          >
            <Heading5>GIFT REGISTORY</Heading5>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus ratione autem vero officiis voluptates officia odit
              magnam pariatur, tempora nulla! Inventore atque autem sapiente!
              Pariatur vitae necessitatibus omnis voluptates! Optio id aperiam
              cum animi excepturi!
            </Paragraph>
          </Card>
          <Card
            imageSrc={"/images/accomodation.jpg"}
            imageHeiht={300}
            imageWidth={300}
          >
            <Heading5>ACCOMODATION</Heading5>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus ratione autem vero officiis voluptates officia odit
              magnam pariatur, tempora nulla! Inventore atque autem sapiente!
              Pariatur vitae necessitatibus omnis voluptates! Optio id aperiam
              cum animi excepturi!
            </Paragraph>
          </Card>
        </FlexRow>
      </Block>
      <Block nobackground>
        <BlockHeader>
          <NormalTitle>Are you attending?</NormalTitle>
          <Paragraph>
            Please reserve before June 19th, 2023. Lorem ipsum dolor sit amet,
            consectetur adipiscing
          </Paragraph>
        </BlockHeader>
        <FlexRow>
          <div>
            <button className={Styles.rsvp}>RSVP</button>
          </div>
        </FlexRow>
      </Block>
      <ImageBackground image="/images/slide-image-1920-h.jpg">
        <Block nobackground>
          <FlexColumn>
            <h1 className={`${pacifico.className} ${Styles.heading}`}>Thank</h1>
            <h1 className={`${pacifico.className} ${Styles.heading}`}>You</h1>
            <h4
              className={oswald.className}
              style={{ color: "white", fontSize: "3rem" }}
            >
              GERALD & DIANE
            </h4>
          </FlexColumn>
        </Block>
      </ImageBackground>
    </main>
  );
}
