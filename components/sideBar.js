import styles from "./sideBar.module.css";
import Link from "next/link";


export default function SideBar() {
  return (
    <div  className={styles.sideBar}>
        <ul>
            <li><div>Pages d'histoire</div></li>
            <li><div>Qui sommes nous ?</div></li>
            <li><div>Restaurations</div></li>
            <li><div>Maintien des traditions</div></li>
            <li><div>En savoir plus</div></li>
            <li><div>Bulletins d'information</div></li>
        </ul>
    </div>
    
  );
}
