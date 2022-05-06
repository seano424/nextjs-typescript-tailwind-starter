import type { NextPage } from 'next'
import Layout from '@/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Crypto Clone">
      <div className="w-full container mx-auto">
        <nav className='flex justify-between'>
          <ul className='flex items-center space-x-4'>
            <li className='flex space-x-2'>
              <span>💙</span>
              <span>ONJUNO</span>
            </li>
            <li className='flex items-center space-x-1'>
              <span>Company</span>
              <img src="/images/icons/chevron-down.svg" alt="Chevron Down Icon" className='h-4' />
            </li>
            <li className='flex items-center space-x-1'>
              <span>Learn</span>
              <img src="/images/icons/chevron-down.svg" alt="Chevron Down Icon" className='h-4' />
            </li>
          </ul>
          <ul className='flex items-center space-x-4'>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Create Account</button>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default Home
