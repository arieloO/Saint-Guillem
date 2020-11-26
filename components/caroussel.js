import styles from "./caroussel.module.css";
import utilStyles from "../styles/utils.module.css";

const Caroussel = ({ id, image }) => {
  return (
    <div alt={`${id} gallerie photo`} className={styles.caroussel}>
      {image.map(imgId => (
        <img alt={imgId} src={imgId} />
      ))}
    </div>
  );
};

export default Caroussel;
