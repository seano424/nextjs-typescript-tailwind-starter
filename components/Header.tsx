interface Props {
  sitename: string
}

export default function Header(props: Props) {
  const { sitename = 'ONJUNO' } = props
  return (
    <nav className="flex justify-between">
      <ul className="flex items-center space-x-4">
        <li className="flex space-x-2">
          <span>💙</span>
          <span>{sitename}</span>
        </li>
        <li className="flex items-center space-x-1">
          <span>Company</span>
          <img
            src="/images/icons/chevron-down.svg"
            alt="Chevron Down Icon"
            className="h-4"
          />
        </li>
        <li className="flex items-center space-x-1">
          <span>Learn</span>
          <img
            src="/images/icons/chevron-down.svg"
            alt="Chevron Down Icon"
            className="h-4"
          />
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
