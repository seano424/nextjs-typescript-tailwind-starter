import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
interface Props {
  logo?: string
  title?: string
  showMenu: boolean
  setShowMenu: (boolean: any) => void
}

export default function Navbar(props: Props) {
  const { showMenu, setShowMenu } = props
  const [showMenuText, setShowMenuText] = useState(false)

  return (
    <AnimatePresence>
      <nav className="flex flex-row-reverse justify-between items-center w-full filter px-8 py-4 z-20 fixed">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-4 sm:text-2xl tracking-widest uppercase text-primary">
            Salt Studios
          </a>
        </Link>
        {/* Mobile Navigation */}
        <ul
          className="cursor-pointer h-20 w-20 flex justify-center items-center select-none"
          onMouseEnter={() => setShowMenuText(true)}
          onMouseLeave={() => setShowMenuText(false)}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenuText && (
            <motion.li
              transition={{ duration: 0.4 }}
              animate={{
                scale: [0.3, 1.2],
              }}
              className={`rounded-full flex items-center justify-center p-5 w-20 h-20 ${
                showMenu ? 'bg-white' : 'bg-primary'
              }`}
            >
              <motion.span
                transition={{ duration: 0.7 }}
                animate={{
                  opacity: [0, 1],
                }}
                className={`${
                  showMenu ? 'bg-white text-primary' : 'text-white'
                }`}
              >
                {showMenu ? 'Close' : 'Menu'}
              </motion.span>
            </motion.li>
          )}
          {!showMenuText && (
            <motion.li
              transition={{ duration: 0.4 }}
              animate={{
                scale: [5, 1.2],
              }}
              // exit={{ opacity: 0 }}
              className={`rounded-full flex items-center justify-center z-50 p-2 ${
                showMenu ? 'bg-white' : 'bg-primary'
              }`}
            ></motion.li>
          )}
        </ul>
      </nav>
    </AnimatePresence>
  )
}
