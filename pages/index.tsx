import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '../components/Hero'
import ContactInfo from '@/components/ContactInfo'
import LimitedEventList from '@/components/LimitedEventList'


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
          <h1 className='flex items-center justify-center text-3xl font-extrabold'>Events</h1>
          
            <LimitedEventList />
          
        </section>
      </div>

      <div>
        <section>
        <h1 className='flex items-center justify-center text-3xl font-extrabold'>For More Information</h1>

          <ContactInfo/>

        </section>
      </div>

      <div className='flex items-center justify-center'>
        <h6 className='text-sm p-5'>IEEE AUI student branch @2023</h6>
      </div>

  
    </main>
  )
}
