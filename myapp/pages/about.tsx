import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>このページについて</h1>
      Reacthookについて学習するリポジトリです
      <Footer />
    </div>
  )
}

export default Home
