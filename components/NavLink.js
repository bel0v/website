import { withRouter } from "next/router"
import Link from "next/link"
import { Box } from "./grid"

const NavLink = ({ children, router, href }) => {
  const active = router.pathname === href
  return (
    <Link href={href}>
      <Box as="a" fg={active ? "darkAccent" : "lightAccent"}>
        {children}
      </Box>
    </Link>
  )
}

export default withRouter(NavLink)
