interface Props {
  logo?: string
  title?: string
}

export default function Navbar(props: Props) {
  const { logo, title } = props
  return (
    <nav className="flex justify-between items-center bg-white/50 filter backdrop-blur-sm fixed w-full h-24 px-8 lg:px-base inset-0">
      <ul className="flex items-center">
        <li className="flex items-center gap-2 text-4xl font-extrabold capitalize">
          <span className="text-6xl">{logo}</span>
          <span className="max-w-sm">{title}</span>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li>About</li>
        <li>News</li>
        <li className="border border-black px-4 py-2 rounded-full">
          Get the app
        </li>
      </ul>
    </nav>
  )
}
