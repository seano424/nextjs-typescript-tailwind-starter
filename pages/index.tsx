import Layout from '@/components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-[1000px] page-padding container">
        <h1 className="h1">Make friends.</h1>
        <h1 className="h1">Create activities.</h1>
        
        <p className='p py-base'>
          Venn means friend in Norwegian. We want to make the world more social
          even without your phone.
        </p>
      </div>
    </Layout>
  )
}

export default Home
