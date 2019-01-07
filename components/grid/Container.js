import { Box } from "./Box"
import styled from "styled-components"
import { radius } from "pss"

export const Container = styled(Box)`
  background: ${({ theme }) => theme.color.light};
  ${radius}
`
