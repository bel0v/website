import Header from "../Header"
import { Container, Box, Flex } from "../grid"

export const PageLayout = props => (
  <Box mgx="auto" maxWidth="site">
    <Container mgt="1rem" mgb="1rem" mgx="1rem" radius="4px">
      <Header />
      <Box as="main" pd="1rem">
        {props.children}
      </Box>
    </Container>
  </Box>
)
