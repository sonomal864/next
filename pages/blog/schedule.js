import { getPostBySlug } from '/libs/api';
import React from "react";
import Header from '/components/header';
import Footer from '/components/footer';

export default function Schedule({
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

<span>

</span>
</main>
<Footer />
</>

)
};


export async function getStaticProps(){
const slug = `TypeScriptについて`;
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
