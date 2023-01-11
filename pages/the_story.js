import Head from "next/head";
import Styles from "../styles/Story.module.scss";
import Block from "../components/Block";
import ImageBackground from "../components/ImageBackground";

export default function Page() {
  return (
    <main>
      <Head>
        <title>The story</title>
      </Head>
      <>
        <section className={Styles.hero}>
          <div className={Styles.heart_icon}></div>
          <h1 className="text-white text-center">He Proposed</h1>
          <p className="text-white text-center">
            Integer ultrices malesuada ante quis pharetra. Nullam non bibendum
            dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
            metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
            faucibus. Proin pulvinar congue ex, vitae commodo. Phasellus
            condimentum, mi ut sodales
          </p>
          <div className={Styles.hero_overlay}></div>
        </section>
        <Block>
          <h2 className="text-center">HOW HE ASKED</h2>
          <div className="intro">
            <div className="text-justify p-2">
              <p>
                <strong>I&apos;m Gerrard Leandro.</strong> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Fusce urna urna, imperdiet et
                purus ut, ultricies sollicitudin arcu. Cras placerat, arcu non
                faucibus suscipit, ex arcu consectetur enim, eu malesuada magna
                turpis sit amet mauris. Nullam nec leo at lorem interdum
                commodo. Etiam mollis massa in mauris lacinia porta.
                Pellentesque tristique, ante nec dictum mollis, felis ligula
                ullamcorper velit, ac auctor est ipsum vehicula ex. Donec eu
                blandit est, id gravida justo. Maecenas laoreet laoreet congue.
                Cras sit amet vestibulum ligula. Ut nec erat tristique, iaculis
                purus ac, pellentesque mi. Donec ac cursus est. Nunc id varius
                enim, ut tincidunt mi. Integer non est eros. Aliquam ex magna,
                elementum at dignissim vitae, placerat quis ante.
              </p>
              <p>
                Morbi a condimentum quam. Nullam quis quam at ex eleifend
                feugiat. Vivamus lacinia quam quam, ac viverra turpis
                pellentesque in. Mauris sollicitudin sapien risus, non sagittis
                velit dictum eget. Suspendisse velit lacus, pulvinar non ante
              </p>
            </div>
            <div className="text-justify p-2">
              <p>
                ut, venenatis vehicula dolor. In hac habitasse platea dictumst.
                Nunc blandit egestas magna eu commodo. Proin ut eros ante.
                Mauris vitae tempus sem, ac venenatis arcu. Etiam eget blandit
                arcu, quis consequat nunc. Nunc pulvinar vehicula pellentesque.
                Sed auctor scelerisque mi. Curabitur mattis consequat lacus non
                iaculis.
              </p>
              <p>
                Integer justo nibh, ullamcorper et dolor ut, porta dapibus ante.
                Sed quis ex at felis ornare pharetra vitae id dolor. Donec
                finibus sagittis ipsum, tristique luctus tellus pharetra
                ultrices. Suspendisse mollis, tortor non placerat placerat,
                ligula odio luctus est, sit amet scelerisque diam ante tristique
                massa. Aenean molestie tellus a quam porttitor vehicula. Aliquam
                quis eros risus. Sed porttitor elit et diam feugiat egestas.
                Proin consequat suscipit accumsan. Curabitur mauris risus,
                tincidunt ut odio non, scelerisque vehicula metus. Proin urna
                odio, dignissim vitae nibh vitae, consectetur placerat tortor.
                In a ante ultrices, mollis erat eget, sagittis metus. Mauris
                sodales
              </p>
            </div>
          </div>
        </Block>
        <section className={Styles.asked}>
          <div className={Styles.heart_icon}></div>
          <h3 className="text-white text-center">MARRY ME DIANE</h3>
          <p className="text-white text-center">
            Integer ultrices malesuada ante quis pharetra. Nullam non bibendum
            dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
            metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
            faucibus. Proin pulvinar congue ex, vitae commodo. Phasellus
            condimentum, mi ut sodales
          </p>
          <div className={Styles.asked_overlay}></div>
        </section>
        <Block>
          <h2 className="text-center">SHE HUGGED HIM</h2>
          <div className="intro">
            <div className="text-justify p-2">
              <p>
                ut, venenatis vehicula dolor. In hac habitasse platea dictumst.
                Nunc blandit egestas magna eu commodo. Proin ut eros ante.
                Mauris vitae tempus sem, ac venenatis arcu. Etiam eget blandit
                arcu, quis consequat nunc. Nunc pulvinar vehicula pellentesque.
                Sed auctor scelerisque mi. Curabitur mattis consequat lacus non
                iaculis.
              </p>
            </div>
            <div className="text-justify p-2">
              <p>
                ut, venenatis vehicula dolor. In hac habitasse platea dictumst.
                Nunc blandit egestas magna eu commodo. Proin ut eros ante.
                Mauris vitae tempus sem, ac venenatis arcu. Etiam eget blandit
                arcu, quis consequat nunc. Nunc pulvinar vehicula pellentesque.
                Sed auctor scelerisque mi. Curabitur mattis consequat lacus non
                iaculis.
              </p>
            </div>
          </div>
          <div className={Styles.hug}></div>
          {/* <Image src={'/images/the-story-hugged-him-a.jpg'} width={1024} height={960} /> */}
        </Block>
        <h2 className="text-center">
          AND SAID &quot; <span style={{ color: "red" }}>YES!</span>&quot;
        </h2>
        <footer className={Styles.footer}></footer>
      </>
    </main>
  );
}
