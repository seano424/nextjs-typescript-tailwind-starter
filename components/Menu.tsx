import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  showMenu: boolean
}

export default function Menu(props: Props) {
  const { showMenu } = props
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.section
          initial={{ opacity: 0, y: -1000 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: -1000 }}
          className="lg:hidden"
        >
          <ul className="absolute left-0 w-full flex flex-col gap-4 shadow-md bg-white border-t border-gray-50 px-base py-base">
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
          </ul>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
