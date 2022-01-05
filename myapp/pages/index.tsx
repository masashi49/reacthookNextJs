import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>トップページ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>トップページです</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Footer />
    </div>
  )
}

export default Home
