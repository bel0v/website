import Header from "../Header"
import { Container, Box } from "../grid"

export const PageLayout = props => (
  <Container maxWidth="site" mgt="1rem" mgb="1rem" mgx="auto" radius="4px">
    <Header />
    <Box pdx="1rem" pdb="1rem">
      {props.children}
    </Box>
  </Container>
)
