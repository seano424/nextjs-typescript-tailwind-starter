import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative aspect-2">
        <Image
          className="object-cover"
          src="/images/hero.jpg"
          alt="Hero Image"
          layout="fill"
        />
        <h1 className="h1 text-white absolute inset-0 flex justify-center items-center">
          Hero Text Space
        </h1>
      </div>
    </Layout>
  )
}

export default Home
