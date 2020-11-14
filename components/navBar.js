import Head from 'next/head';
import Link from 'next/link';
import NavLink from './navLink';
import styles from './navBar.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Chapelle de Saint-Guillem, association de sauvegarde';

export default function NavBar() {
  return (
    <ul className="navBar">
      <li className="homeLogo">
        <Link href="/">
          <a>
            <img alt="" src="/images/logo-nobackground.png" />
          </a>
        </Link>
      </li>
      <li className="homeLink">
        <Link href="/">
          <a>
            Association Salvaguarda
            <br />
            Sant-Guillem de Combret
          </a>
        </Link>
      </li>
      <li>
        <NavLink href="/histoire">
          <div className="navLink">Histoire</div>
        </NavLink>
      </li>
      <li>
        <NavLink href="/restaurations">
          <div className="navLink">Restaurations</div>
        </NavLink>
      </li>
      <li>
        <NavLink href="/traditions">
          <div className="navLink">Traditions</div>
        </NavLink>
      </li>
      <li>
        <NavLink href="/qui-sommes-nous">
          <div className="navLink">Qui sommes-nous ?</div>
        </NavLink>
      </li>
      <li>
        <NavLink href="/en-savoir-plus">
          <div className="navLink">En savoir plus </div>
        </NavLink>
      </li>
      <li>
        <NavLink href="/actualite">
          <div className="navLink">Actualités</div>
        </NavLink>
      </li>
    </ul>
  );
}
