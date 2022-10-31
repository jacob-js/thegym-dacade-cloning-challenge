import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>NEAR dev 101 | Thegym nextjs challenge</title>
  </Head>
  <Layout><Component {...pageProps} /></Layout>
  </>
}

export default MyApp
