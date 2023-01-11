import Head from "next/head";
import ImageBackground from "../components/ImageBackground";
import Block from "../components/Block";
import Styles from "../styles/Profile.module.scss";
import Navbar from "../components/navigation/Navbar";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Profile Page</title>
      </Head>
      <ImageBackground image="/images/profile.jpg">
        {/* <Navbar /> */}
        <div className={Styles.hero}>
          <h1 className="text-white">GERRARD LEANDRO</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
            vel turpis
          </p>
          <div className={Styles.overlay}></div>
          <span className={Styles.whiteIcon}></span>
        </div>
      </ImageBackground>
      <Block>
        <article className={Styles.icon_section}>
          <div className={Styles.icon_container}></div>
          <div className={Styles.icon_container}></div>
          <div className={Styles.icon_container}></div>
        </article>
        <section className={Styles.intro}>
          <div className="text-justify p-2">
            <p>
              <strong>I&apos;m Gerrard Leandro.</strong> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Fusce urna urna, imperdiet et
              purus ut, ultricies sollicitudin arcu. Cras placerat, arcu non
              faucibus suscipit, ex arcu consectetur enim, eu malesuada magna
              turpis sit amet mauris. Nullam nec leo at lorem interdum commodo.
              Etiam mollis massa in mauris lacinia porta. Pellentesque
              tristique, ante nec dictum mollis, felis ligula ullamcorper velit,
              ac auctor est ipsum vehicula ex. Donec eu blandit est, id gravida
              justo. Maecenas laoreet laoreet congue. Cras sit amet vestibulum
              ligula. Ut nec erat tristique, iaculis purus ac, pellentesque mi.
              Donec ac cursus est. Nunc id varius enim, ut tincidunt mi. Integer
              non est eros. Aliquam ex magna, elementum at dignissim vitae,
              placerat quis ante.
            </p>
            <p>
              Morbi a condimentum quam. Nullam quis quam at ex eleifend feugiat.
              Vivamus lacinia quam quam, ac viverra turpis pellentesque in.
              Mauris sollicitudin sapien risus, non sagittis velit dictum eget.
              Suspendisse velit lacus, pulvinar non ante
            </p>
          </div>
          <div className="text-justify p-2">
            <p>
              ut, venenatis vehicula dolor. In hac habitasse platea dictumst.
              Nunc blandit egestas magna eu commodo. Proin ut eros ante. Mauris
              vitae tempus sem, ac venenatis arcu. Etiam eget blandit arcu, quis
              consequat nunc. Nunc pulvinar vehicula pellentesque. Sed auctor
              scelerisque mi. Curabitur mattis consequat lacus non iaculis.
            </p>
            <p>
              Integer justo nibh, ullamcorper et dolor ut, porta dapibus ante.
              Sed quis ex at felis ornare pharetra vitae id dolor. Donec finibus
              sagittis ipsum, tristique luctus tellus pharetra ultrices.
              Suspendisse mollis, tortor non placerat placerat, ligula odio
              luctus est, sit amet scelerisque diam ante tristique massa. Aenean
              molestie tellus a quam porttitor vehicula. Aliquam quis eros
              risus. Sed porttitor elit et diam feugiat egestas. Proin consequat
              suscipit accumsan. Curabitur mauris risus, tincidunt ut odio non,
              scelerisque vehicula metus. Proin urna odio, dignissim vitae nibh
              vitae, consectetur placerat tortor. In a ante ultrices, mollis
              erat eget, sagittis metus. Mauris sodales
            </p>
          </div>
        </section>
      </Block>
      <ImageBackground image="/images/footer-image.jpg">
        <Block nobackground>
          <div className={Styles.footer}>
            <h3 className="text-white text-center">GERRARD & DIANNE</h3>
            <div className={Styles.footerOverlay}></div>
          </div>
        </Block>
      </ImageBackground>
    </main>
  );
}
