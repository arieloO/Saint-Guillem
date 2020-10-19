import Head from "next/head";
import styles from "./header.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Chapelle de Saint-Guillem, association de sauvegarde";

export default function Leader() {
  return (
    <div className={styles.headerBanner}>
      <div className={styles.bannerTitle}>Saint-Guillem de Combret</div>
    </div>
  );
}
