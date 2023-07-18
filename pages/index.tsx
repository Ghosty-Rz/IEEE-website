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
    {/* Header : which is the navbar*/}
      
      <div>
        <section>
          <h2 className='flex items-center justify-center text-2xl font-extrabold'>Events</h2>
          
        </section>
      </div>


    </main>
  )
}
