import { Box } from './Box'
import styled from 'styled-components'

export const Container = styled(Box)`
  background: ${({ theme }) => theme.color.light};
`
Container.displayName = 'Container'
