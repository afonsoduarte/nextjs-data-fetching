import Nav from './nav'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
