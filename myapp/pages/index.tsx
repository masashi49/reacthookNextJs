import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>トップページです</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Footer />
    </div>
  )
}

export default Home
