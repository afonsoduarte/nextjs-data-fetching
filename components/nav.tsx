import Container from './container'
import cn from 'classnames'
import { NavLink } from './NavLink'
import { useRouter } from 'next/dist/client/router'

export default function Nav() {
  const { pathname } = useRouter()
  return (
    <div className={'border-b bg-accent-1 border-accent-2'}>
      <Container>
        <div className="py-2 text-center text-sm">
          <div className="flex justify-center gap-5">
            <NavLink href="/ssg" active={pathname === '/ssg'}>
              SSG
            </NavLink>
            <NavLink href="/ssr" active={pathname === '/ssr'}>
              SSR
            </NavLink>
            <NavLink href="/isr" active={pathname === '/isr'}>
              ISR
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
