import Link from 'next/link'

export function NavLink({ href, active, children }) {
  return (
    <Link href={href}>
      <a
        className={`underline hover:text-cyan duration-200 transition-colors ${
          active ? 'text-cyan' : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}
