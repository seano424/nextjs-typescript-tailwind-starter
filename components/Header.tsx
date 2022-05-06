import Dropdown from './Dropdown'
import { dropdownList } from 'constants/dropdownList'

interface HeaderProps {
  sitename: string
}

export default function Header(props: HeaderProps) {
  const { sitename = 'ONJUNO' } = props

  return (
    <nav className="flex justify-between py-4 mt-5 container">
      <ul className="flex items-center space-x-4">
        <li className="flex space-x-2 text-3xl font-bold">
          <span>💙</span>
          <span>{sitename}</span>
        </li>
        {dropdownList.map((list, i) => (
          <Dropdown key={i} i={i} list={list} />
        ))}
      </ul>
      <ul className="flex items-center space-x-4">
        <li>
          <button className="button">Login</button>
        </li>
        <li>
          <button className="button bg-blue-500 text-white">
            Create Account
          </button>
        </li>
      </ul>
    </nav>
  )
}
