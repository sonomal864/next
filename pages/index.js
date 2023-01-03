import Head from "next/head";
import styles from "../styles/Home.module.css";
import { client } from '../libs/client';

export default function Home({ data }) {
  return (
    <>
    
    <h2>Recent Entries</h2>
    <main>

<h1>{data.contents[0].title}</h1>

{data.contents[0].content}

</main>
      <main>

        <h1>{data.contents[1].title}</h1>

        {data.contents[1].content}
        
      </main>
    
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
  });
console.log(data)
  return {
    props: {
      data,
    },
  };
};