import { chevronDown } from '../constants/icons'

interface IconProps {
  path: string
}

export default function Icon(props: IconProps) {
  const { path = chevronDown } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  )
}
