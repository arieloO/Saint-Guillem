import { useState } from 'react';
import styles from './carousel.module.css';
import utilStyles from '../styles/utils.module.css';

const Carousel = ({ id, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div alt={`${id} gallerie photo`} className={styles.carousel}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setSelectedIndex(selectedIndex - 1)}
      >
        back
      </button>

      <div className={styles.imageDisplay}>
        {/* {images.map(imgId => (
          <img alt={imgId} src={`/images/${imgId}`} />
        ))} */}
        {<img alt={id} src={`/images/${images[selectedIndex]}`} />}
      </div>

      <button
        type="button"
        className={styles.button}
        onClick={() => setSelectedIndex(selectedIndex + 1)}
      >
        forward
      </button>
    </div>
  );
};

export default Carousel;
