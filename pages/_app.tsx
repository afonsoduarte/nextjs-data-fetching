import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/index.css'
import NProgress from 'nprogress'
import '../public/nprogress.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
      setLoading(true)
    }
    const handleStop = () => {
      NProgress.done()
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <div
      className={`${loading ? 'opacity-10' : ''} transition-opacity delay-100`}
    >
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
