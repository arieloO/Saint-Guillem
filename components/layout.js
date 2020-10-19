import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import { FullscreenExit } from "@material-ui/icons";



export const siteTitle = "Chapelle de Saint-Guillem, association de sauvegarde";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="content" />
        <meta
          name="keywords"
          content="sauvegarde, entretien, traditions, pèlerinages, culturelles, culture, écologique, écologie,  spirituelles, spiritualité, organisation, conjurator, pages, saint, guillem, Vallespir, Le Tech, Arles-Sur-Tech, Pratz-de-Mollo, messe, Sainte Madeleine, Saint Gu"
    />
      </Head>
      <NavBar />
      <Header />
      
      <main style={{
        display: "flex",
        flexDirection: "row"
      }} >
        <SideBar />
        {children}
      </main>
      <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      <footer></footer>
    </div>
  );
}
