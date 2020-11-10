import Head from 'next/head';
import Link from 'next/link';
import { FullscreenExit } from '@material-ui/icons';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Header from './header';
import NavBar from './navBar';
import SideBar from './sideBar';

export const siteTitle = 'Chapelle de Saint-Guillem, association de sauvegarde';

export default function Layout({ children, home, section }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="content" />
        <meta
          name="keywords"
          content="sauvegarde, entretien, traditions, pèlerinages, culturelles, culture, écologique, écologie,  spirituelles, spiritualité, organisation, conjurator, pages, saint, guillem, Vallespir, Le Tech, Arles-Sur-Tech, Pratz-de-Mollo, messe, sainte madeleine, saint-guillem, goigs"
        />
      </Head>
      <NavBar />
      <Header />

      <main>
        <div className={styles.wrapper}>
          {section ? (
            <div className={styles.mainWrapper}>{children}</div>
          ) : (
            <div className={styles.mainWrapper}>
              {children}
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Retour à l'accueil</a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer />
    </div>
  );
}
