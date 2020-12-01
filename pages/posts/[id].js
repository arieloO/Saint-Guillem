import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import tagToPath from '../../lib/tagToPath';
import Carousel from '../../components/carousel';

export default function Post({ postData }) {
  return (
    <Layout section>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* <div
        // style={{ backgroundImage: `url(${postData.cover_image})` }}
        className="article-image-cover"
      /> */}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* <h4>{postData.sub_title}</h4> */}
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={utilStyles.backToHome}>
        <Link href={tagToPath(postData.tags[0])}>
          <a>
            ← Retour à <i>{`${postData.section}`}</i>
          </a>
        </Link>
      </div>
      {postData.carousel ? (
        <Carousel id={postData.id} images={postData.carousel} />
      ) : null}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
