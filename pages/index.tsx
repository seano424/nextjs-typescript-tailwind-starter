import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="Home Hero"
          layout="fill"
          priority
        />
      </div>
    </Layout>
  )
}

export default Home
