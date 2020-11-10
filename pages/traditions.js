import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import PostPreview from '../components/postPreview';

export default function FilteredPosts({ allPostsData }) {
  return (
    <Layout section>
      <Head>
        <title>Traditions</title>
      </Head>

      <section className={`${utilStyles.header} ${utilStyles.padding1px}`}>
        <div className>
          <h2 className={`${utilStyles.headingLg} ${utilStyles.previewHeading}`}>Traditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image, tags }) =>
            tags[0] === 'traditions' ? (
              <PostPreview id={id} date={date} title={title} image={image} tags={tags} />
            ) : (
              undefined
            )
          )}
        </ul>
        <div style={{ height: '600px' }} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
