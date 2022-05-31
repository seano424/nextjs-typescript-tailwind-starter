import Layout from '@/components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='px-base py-base my-base card'>
        <h1 className='h1'>Let's go...</h1>
      </div>
    </Layout>
  )
}

export default Home
