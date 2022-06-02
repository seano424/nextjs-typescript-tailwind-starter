import Link from 'next/link'
interface Props {
  logo?: string
  title?: string
}

export default function Navbar(props: Props) {
  const { title } = props
  return (
    <nav className="flex justify-between items-center w-full py-4 px-base">
      <ul>
        <li>
          <Link href="/">
            <a className="cursor-pointer">{title}</a>
          </Link>
        </li>
      </ul>
      <ul className='flex space-x-4'>
        <li>
          <Link href="/">
            <a className="cursor-pointer">Work</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="cursor-pointer">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="cursor-pointer">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
