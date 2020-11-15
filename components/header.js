import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Chapelle de Saint-Guillem, association de sauvegarde';

export default function Header({ section }) {
  return (
    <div className={!section ? styles.homeHeaderBanner : styles.headerBanner}>
      <div className={styles.bannerTitle}>{section || 'Saint-Guillem de Combret'}</div>
    </div>
  );
}
