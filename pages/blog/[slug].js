import { getPostBySlug, getAllSlugs } from '/libs/api'
import React from "react";
import Header from '/components/header';
import Footer from '/components/footer';

export default function Post({
  title,
  publish,
  content,
  categories,
  eyecatch,
}) {
return(
<>

<Header />
<main>
<h1>{title}</h1>
<p>{content}</p>

<a href="/blog/">トップに戻る</a>
</main>
<Footer />
</>

)
};


export async function getStaticProps(context){
  const slug = context.params.slug;
  const allSlugs = await getAllSlugs();
const post = await getPostBySlug(slug);
return {
  props:{
    title: post.title,
    //publish: JSON.parse(JSON.stringify(post.publishDate)),
    content: post.content,
    categories: post.categories,
    //eyecatch: post.eyecatch,
  }
}
}


export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}