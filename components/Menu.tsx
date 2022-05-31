import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  showMenu: boolean
}

export default function Menu(props: Props) {
  const { showMenu } = props
  return (
    <AnimatePresence exitBeforeEnter>
      {showMenu && (
        <motion.ul
          transition={{ duration: 0.5 }}
          animate={{
            x: [-800, 0],
          }}
          className="absolute top-0 left-0 right-1/2 bottom-0 flex flex-col gap-4 shadow-md bg-blue-700 border-t border-gray-50 px-16 py-40 z-10"
        >
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <Link href="/about">
            <a className="link">About</a>
          </Link>
          <Link href="/projects">
            <a className="link">Projects</a>
          </Link>
          <Link href="/reviews">
            <a className="link">Reviews</a>
          </Link>
          <Link href="/contact-us">
            <a className="link">Contact Us</a>
          </Link>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}
