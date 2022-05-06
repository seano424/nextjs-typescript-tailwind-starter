import { chevronDown } from '../helpers/icons'
import Icon from '@/components/Icon'

interface HeaderProps {
  sitename: string
}

export default function Header(props: HeaderProps) {
  const { sitename = 'ONJUNO' } = props
  return (
    <nav className="flex justify-between py-4">
      <ul className="flex items-center space-x-4">
        <li className="flex space-x-2">
          <span>💙</span>
          <span>{sitename}</span>
        </li>
        <li className="flex items-center space-x-1 cursor-pointer">
          <span>Company</span>
          <Icon path={chevronDown} />
        </li>
        <li className="flex items-center space-x-1 cursor-pointer">
          <span>Learn</span>
          <Icon path={chevronDown} />
        </li>
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
