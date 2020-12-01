import { useState } from 'react';
import styles from './carousel.module.css';
import utilStyles from '../styles/utils.module.css';

const Carousel = ({ id, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div alt={`${id} gallerie photo`} className={styles.carousel}>
        <div className={styles.imageDisplay}>
          <img
            className={styles.image}
            alt={id}
            src={`/images/${images[selectedIndex]}`}
          />
        </div>

        <div className={styles.overlay}>
          <button
            hidden={selectedIndex === 0}
            type="button"
            className={styles.button}
            id={styles.backButton}
            onClick={() => setSelectedIndex(selectedIndex - 1)}
          >
            ᗏ
          </button>
          <div className={styles.filler} />
          <button
            hidden={selectedIndex - 1 === images.length}
            type="button"
            className={styles.button}
            id={styles.forwardButton}
            onClick={() => setSelectedIndex(selectedIndex + 1)}
          >
            ᗌ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
