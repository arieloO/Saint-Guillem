import Head from "next/head";
import styles from "./navBar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Chapelle de Saint-Guillem, association de sauvegarde";

export default function NavBar() {
  return (
    <ul className={styles.navBar}>
      <li>Pages d'histoire</li>
      <li>Qui sommes nous ?</li>
      <li>Restaurations</li>
      <li>Maintien des traditions</li>
    </ul>
  );
}
