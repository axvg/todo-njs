import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p>Some content</p>
    </main>
  )
}
