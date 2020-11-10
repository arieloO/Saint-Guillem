import Link from 'next/link';
import styles from './postPreview.module.css';
import utilStyles from '../styles/utils.module.css';
import Date from './date';
// import { getSortedPostsData } from '../lib/posts';

export default function PostPreview({ id, date, title, image, tags }) {
  return (
    <li className={styles.previewList} key={id}>
      {/* I could create a component to generate preview Link/Image */}

      <Link href={`/posts/${id}`}>
        <div className={styles.previewDiv}>
          <img src={image || '/images/logo-nobackground.png'} alt={image ? id : null} className={styles.previewImg} />
          <div className={styles.text}>
            <a className={styles.title}>{title}</a>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
              <br />
            </small>
            <small>
              <p>
                {tags.map((category, index, array) => {
                  return index + 1 < array.length ? `${category}, ` : `${category} `;
                })}
              </p>
            </small>
          </div>
        </div>
      </Link>
    </li>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData
//     }
//   };
// }
