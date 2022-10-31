import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>NEAR dev 101 | Thegym nextjs challenge</title>
    <link rel="shortcut icon" href="/app/near-logo.svg" type="image/x-icon" />
  </Head>
  <Layout><Component {...pageProps} /></Layout>
  </>
}

export default MyApp
