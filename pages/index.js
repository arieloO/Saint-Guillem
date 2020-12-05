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

      {/* https://css-tricks.com/styling-based-on-scroll-position/ */}

      <section className={`${utilStyles.header} ${utilStyles.padding1px}`}>
        <p>
          [petit texte presentant brievement la chapelle son histoire, et le but
          de l'association]
        </p>
        <h2 className={utilStyles.headingLg}>tout les articles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image, section, tags }) => (
            <PostPreview
              id={id}
              date={date}
              title={title}
              image={image}
              tags={tags}
            />
          ))}
        </ul>

        <Link href="/">
          <a>← Retour à l'accueil</a>
        </Link>
        <div style={{ height: '100px' }} />
      </section>
      <a
        href="http://www.salvaguardasantguillemdecombret.fr"
        title="http://www.salvaguardasantguillemdecombret.fr/"
      >
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
