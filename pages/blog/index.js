import { getAllPosts } from '/libs/api';
import Link from 'next/link';
import styles from '/styles/Home.module.css'
import Header from '/components/header';
import Footer from '/components/footer';


export default function Posts({ posts }) {
  return (
    <>
<Header />
<div style={{padding:"5%"}}>
  <>recent entries</>
{posts.map(({ title, slug }) => (
  <article className={styles.article} key={slug}>
    <a href={`/blog/${slug}`}>
   
        <h2>{title}</h2>
      </a>
    
  </article>
))}
</div>

<Footer />
</>

  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}
