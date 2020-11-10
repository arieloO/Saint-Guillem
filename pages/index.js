import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import PostPreview from '../components/postPreview';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.header} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image, tags }) => (
            <PostPreview id={id} date={date} title={title} image={image} tags={tags} />
          ))}
        </ul>
        <div style={{ height: '600px' }} />
      </section>
      <a href="http://www.salvaguardasantguillemdecombret.fr" title="http://www.salvaguardasantguillemdecombret.fr/">
        www.salvaguardasantguillemdecombret.fr
      </a>
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
