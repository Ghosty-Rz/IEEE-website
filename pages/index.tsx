import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '../components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    {/* Head */}
      <Head>
        <title>IEEE - Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Hero name='IEEE' message='AUI IEEE Student Branch encourages innovation and creativity' />
    {/* Header */}
      

    </main>
  )
}
