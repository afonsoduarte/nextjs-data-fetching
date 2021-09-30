import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index({}) {
  return (
    <Layout>
      <Head>
        <title>Data fetching strategies with Next.js</title>
      </Head>
      <Container>
        <h1 className="text-5xl my-6">Data fetching strategies with Next.js</h1>
        <ol className="list-decimal text-5xl ">
          <li>
            <a
              className="underline hover:text-cyan duration-200 transition-colors"
              href="/ssg"
            >
              Static Site Generation
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-cyan duration-200 transition-colors"
              href="/ssr"
            >
              Server Side Render
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-cyan duration-200 transition-colors"
              href="/isr"
            >
              Incremental Static Regeneration
            </a>
          </li>
        </ol>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
