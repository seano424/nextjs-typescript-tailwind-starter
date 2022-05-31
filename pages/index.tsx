import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className='min-h-screen'>
        <div className="relative h-screen w-full">
          <Image
            className='object-cover'
            src="https://images.unsplash.com/photo-1633109633238-e982d5b61f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt="Home Hero"
            layout="fill"
            priority
          />
        </div>
      </section>
    </Layout>
  )
}

export default Home
