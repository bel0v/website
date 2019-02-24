import styled from 'styled-components'
import { space, sizes, colors, border, float, radius, position, display, flex } from 'pss'
import { Rough } from '../Rough'

export const BoxStyles = styled('div')`
  ${space}
  ${sizes}
  ${colors}
  ${display}
  ${flex}
  ${border}
  ${radius}
  ${float}
  ${position}
`
BoxStyles.displayName = 'Box'

export const Box = ({ isRough, children, ...props }) => (
  <BoxStyles {...props}>{isRough ? <Rough>{children}</Rough> : children}</BoxStyles>
)
