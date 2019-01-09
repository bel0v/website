import { Box } from "../components/grid"
import styled from "styled-components"
import { Picture } from "../components/Picture"
const Figcaption = styled("figcaption")`
  font-size: 0.75rem;
`
const Illustration = ({ cdnLink, caption }) => {
  return (
    <Box
      float={{ desktop: "right" }}
      maxWidth={{ phone: "100%", desktop: "35%" }}
      mgl={{ desktop: "1rem" }}
    >
      <figure>
        <Picture cdnLink={cdnLink} />
        <Figcaption>{caption}</Figcaption>
      </figure>
    </Box>
  )
}

/*  */

export const ShortcodeRenderer = props => {
  if (props.identifier === "illustration") {
    return <Illustration {...props.attributes} />
  }
  return null
}
