import { useState } from 'react';
import styles from './carousel.module.css';
import utilStyles from '../styles/utils.module.css';

const Carousel = ({ id, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonAction = x => {
    setSelectedIndex(selectedIndex + x);
  };

  const displayNoneCss = {
    display: 'none'
  };

  return (
    <div className={styles.container}>
      <div alt={`${id} gallerie photo`} className={styles.carousel}>
        <div className={styles.imageDisplay}>
          <img
            className={styles.imageDisplay}
            alt={id}
            src={`/images/${images[selectedIndex]}`}
          />
        </div>

        <div className={styles.overlay}>
          <button
            type="button"
            className={styles.button}
            style={selectedIndex === 0 ? displayNoneCss : null}
            id={styles.backButton}
            onClick={() => buttonAction(-1)}
          >
            <img
              alt="back"
              className={styles.icon}
              src="/chevron-back-circle-outline.svg"
            />
          </button>
          <div className={styles.filler} />
          <button
            hidden={selectedIndex - 1 === images.length}
            type="button"
            className={styles.button}
            style={selectedIndex + 1 === images.length ? displayNoneCss : null}
            id={styles.forwardButton}
            onClick={() => buttonAction(1)}
          >
            <img
              alt="forward"
              className={styles.icon}
              src="/chevron-forward-circle-outline.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
