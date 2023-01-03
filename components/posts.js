import Link from 'next/link'


export default function Posts({ posts }) {
  return (
    <div>
      {posts.map(({ title, slug }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}
