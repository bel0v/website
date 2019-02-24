import { Box } from '../components/grid'
import styled from 'styled-components'
import { Picture } from '../components/Picture'
const Figcaption = styled('figcaption')`
  font-size: 0.75rem;
`

const Placeholder = styled(Box)`
  position: relative;
`
const IllustrationWrapper = styled(Box)`
  margin-bottom: 1rem;
  @media (min-width: 769px) {
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: 1.5rem;
    width: 60%;
  }
`

const Illustration = ({ cdnLink, caption }) => (
  <Placeholder>
    <IllustrationWrapper>
      <figure>
        <Picture cdnLink={cdnLink} />
        <Figcaption>{caption}</Figcaption>
      </figure>
    </IllustrationWrapper>
  </Placeholder>
)
// const Illustration = ({ cdnLink, caption }) => {
//   return (
//     <Box
//       float={{ desktop: "right" }}
//       maxWidth={{ phone: "100%", desktop: "35%" }}
//       mgl={{ desktop: "1rem" }}
//     >
//       <figure>
//         <Picture cdnLink={cdnLink} />
//         <Figcaption>{caption}</Figcaption>
//       </figure>
//     </Box>
//   )
// }

export const ShortcodeRenderer = (props) => {
  if (props.identifier === 'illustration') {
    return <Illustration {...props.attributes} />
  }
  return null
}
