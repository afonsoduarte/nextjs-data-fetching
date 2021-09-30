import Container from '../../components/container'
import RecipeList from '../../components/recipe-list'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPagesForHome } from '../../lib/api'
import Head from 'next/head'

export default function Index({ allPages }) {
  return (
    <Layout>
      <Head>
        <title>Next.js data fetching: SSG, SSR and ISR</title>
      </Head>
      <Container>
        <h1 className="mt-4">Incremental Static Regeneration</h1>
        <Intro />
        {allPages.length > 0 && <RecipeList recipes={allPages} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPages = (await getAllPagesForHome()) ?? []
  return {
    props: { allPages },
    // Next.js will re-generate the page
    // when a request comes in,
    // at most once every 10 seconds
    revalidate: 10
  }
}
