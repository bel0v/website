import { withRouter } from 'next/router'
import Link from 'next/link'
import { Box } from './grid'

const EnterKeyPressHandler = (cb) => ({ key }) => {
  if (key === 'Enter') {
    cb()
  }
}

const NavLink = ({ children, router, href, ...props }) => {
  const active = router.pathname === href
  const followRoute = () => router.push(href)
  return (
    <Link href={href}>
      <Box
        as='a'
        fg={active ? 'darkAccent' : 'lightAccent'}
        {...props}
        onKeyPress={EnterKeyPressHandler(followRoute)}
      >
        {children}
      </Box>
    </Link>
  )
}

export default withRouter(NavLink)
