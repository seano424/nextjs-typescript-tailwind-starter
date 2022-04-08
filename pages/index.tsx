import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="w-full py-20 container mx-auto">
      <h1 className="text-7xl font-black text-center max-w-2xl mx-auto">
        Next Tailwind Starter Kit!!
      </h1>
      <div className="grid gap-2 mt-20 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae
          voluptatibus tempora reprehenderit velit accusamus, voluptates
          eligendi!
        </div>

        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          eveniet voluptatibus nesciunt aliquid autem eos ipsum illum, provident
          repellat excepturi totam nisi est omnis fugit quis quisquam ea veniam
          quasi dolorum molestiae beatae exercitationem tempora in eius!
        </div>

        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          eveniet voluptatibus nesciunt aliquid autem eos ipsum illum, provident
          repellat excepturi totam nisi est omnis fugit quis quisquam ea veniam
          quasi dolorum molestiae beatae exercitationem tempora in eius!
        </div>
      </div>
    </div>
  )
}

export default Home
