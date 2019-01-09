import Link from "next/link"
import styled from "styled-components"
export { PostPreview } from "./PostPreview"
import { withNamespaces } from "../i18n"
import { Flex, Box } from "./grid"
import NavLink from "./NavLink"

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

const Button = styled(Box).attrs({
  type: "button"
})`
  cursor: pointer;
`.withComponent("button")

const changeLanguage = i18n => {
  const targetLanguage = i18n.language === "en" ? "ru" : "en"
  i18n.changeLanguage(targetLanguage)
}

const Header = props => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      pd="1rem"
      bdb="1px solid"
      bdc="darkShades"
    >
      <nav>
        <Ul as="ul">
          <Li>
            <h2>
              <NavLink tabIndex="1" href="/blog">
                {props.t("blog")}
              </NavLink>
            </h2>
          </Li>
          <Li>
            <h2>
              <NavLink tabIndex="2" href="/about">
                {props.t("about")}
              </NavLink>
            </h2>
          </Li>
        </Ul>
      </nav>
      <h3>
        <Button onClick={() => changeLanguage(props.i18n)} pd="1rem">
          {props.t("changeLanguage")}
        </Button>
      </h3>
    </Flex>
  )
}

export default withNamespaces("common")(Header)
