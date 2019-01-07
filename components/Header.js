import Link from "next/link"
import styled from "styled-components"
export { PostPreview } from "./PostPreview"
import { Flex, Box } from "./grid"
import NavLink from "./NavLink"
const Nav = styled("nav")`
  padding: 1rem;
`

const Ul = styled(Flex)`
  padding: 0;
  margin: 0;
`
const Li = styled(Box)`
  padding: 0 0.5rem;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

export const Header = () => (
  <Nav>
    <Ul as="ul">
      <Li>
        <NavLink href="/blog">Blog</NavLink>
      </Li>
      <Li>
        <NavLink href="/about">About</NavLink>
      </Li>
    </Ul>
  </Nav>
)
