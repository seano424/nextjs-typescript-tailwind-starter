import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface Props {
  showMenu: boolean
}

export default function Menu(props: Props) {
  const { showMenu } = props
  const { pathname } = useRouter()

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  }
  return (
    <AnimatePresence exitBeforeEnter>
      {showMenu && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed top-0 left-0 right-0 bottom-1/2 gap-6 pt-36 pl-16 flex flex-col shadow-md bg-primary border-t border-gray-50 z-10 md:bottom-0 md:pl-20 md:py-56 md:gap-12 md:right-1/3 xl:right-1/2"
        >
          <Link href="/">
            <a className={`link ${pathname === '/' && 'active'}`}>Work</a>
          </Link>
          <Link href="/about">
            <a className={`link ${pathname === '/about' && 'active'}`}>
              Studio
            </a>
          </Link>
          <Link href="/projects">
            <a className={`link ${pathname === '/projects' && 'active'}`}>
              Press
            </a>
          </Link>
          <Link href="/contact">
            <a className={`link ${pathname === '/contact' && 'active'}`}>
              Contact
            </a>
          </Link>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}
