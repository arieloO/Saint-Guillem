import Head from 'next/head';
import Link from 'next/link';
import styles from './navBar.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Chapelle de Saint-Guillem, association de sauvegarde';

export default function NavBar() {
  return (
    <ul className={styles.navBar}>
      <li className={styles.homeLogo}>
        <Link href="/">
          <a>
            <img src="/images/logo-nobackground.png" />
          </a>
        </Link>
      </li>
      <li className={styles.homeLink}>
        <Link href="/">
          <a>
            Association Salvaguarda
            <br />
            Sant-Guillem de Combret
          </a>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/histoire">
          <div>Histoire</div>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/restaurations">
          <div>Restaurations</div>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/traditions">
          <div>Traditions</div>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/qui-sommes-nous">
          <div>Qui sommes-nous ?</div>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/en-savoir-plus">
          <div>En savoir plus </div>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/actualites">
          <div>Actualités</div>
        </Link>
      </li>
    </ul>
  );
}
