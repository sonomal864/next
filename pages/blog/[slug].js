import { getPostBySlug, getAllSlugs } from '/libs/api'
import React from "react";
import Header from '/components/header';
import Footer from '/components/footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import parse from 'html-react-parser';

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
<h1 style={{fontSize:'20px', margin: '0 10%', padding:'0.5em'}}>{title}</h1>
<div style={{margin: '2% 10%', padding:'0.5em'}}>

<div
dangerouslySetInnerHTML={{
  __html: `${content}`,
}}
/>
 
 </div>


<a href="/blog/"><span style={{float: 'right', margin: '50px', border :'1px solid #fff', padding:'0.5em'}}>トップに戻る</span></a>
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
    content: post.content,
    categories: post.categories,
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

const MdText = function(content){
return(
  <div
dangerouslySetInnerHTML={{
  __html: `${content}`,
}}
/>
)
}
