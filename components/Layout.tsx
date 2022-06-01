import { ReactNode, useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Menu from './Menu'

interface Props {
  children: ReactNode
  title?: string
  logo?: string
}

export default function Layout(props: Props) {
  const { children, title = 'Art Gallery' } = props
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🟡</text></svg>"
        />
      </Head>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} title={title} />
      <Menu showMenu={showMenu} />
      <main className="flex-1 w-full h-full">{children}</main>
      <Footer />
    </div>
  )
}
