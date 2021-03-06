import Link from 'next/link';
import styles from './postPreview.module.css';
import utilStyles from '../styles/utils.module.css';
import Date from './date';
import TagLabel from './tagLabel';
// import { getSortedPostsData } from '../lib/posts';

// const prefix = '/Saint-Guillem';

export default function PostPreview({ id, date, title, image, tags }) {
  return (
    <li className={styles.previewList} key={id}>
      {/* I could create a component to generate preview Link/Image */}

      <Link href={`/posts/${id}`}>
        <div className={styles.previewDiv}>
          <img
            // src={image ? prefix + image : `${prefix}/images/logo-nobackground.png`}
            src={image || `/images/logo-nobackground.png`}
            alt={image ? id : null}
            className={styles.previewImg}
          />
          <div className={styles.text}>
            <a className={styles.title}>{title}</a>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
              <br />
            </small>
            <div className="tags-label-container">
              {tags.map((tag, index) => (
                <TagLabel key={tag} tag={tag} />
              ))}
            </div>
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
