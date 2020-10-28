import Head from "next/head";
import styles from "./navBar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Chapelle de Saint-Guillem, association de sauvegarde";

export default function NavBar() {
  return (
    <ul className={styles.navBar}>
            <li className={styles.homeLink}><img src="/images/logo-nobackground.png" /> Salvaguarda Sant-Guillem de Combret</li>
            <li className={styles.navLink}><div>Pages d'histoire</div></li>
            <li className={styles.navLink}><div>Qui sommes nous ?</div></li>
            <li className={styles.navLink}><div>Restaurations</div></li>
            <li className={styles.navLink}><div>Traditions</div></li>
            <li className={styles.navLink}><div>En savoir plus</div></li>
            <li className={styles.navLink}><div>Bulletins d'info</div></li>
    </ul>
  );
}
