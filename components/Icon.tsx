import { chevronDown } from '../constants/icons'

interface IconProps {
  path: string
  size: string
}

export default function Icon(props: IconProps) {
  const { path = chevronDown, size = 'sm' } = props
  const width = size === 'sm' ? 'w-6' : size === 'md' ? 'w-8' : size === 'lg' ? 'w-10' : 'w-8'
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${width}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  )
}
