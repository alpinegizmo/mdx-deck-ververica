import styled from '@emotion/styled'
import * as ververica from '../themes/ververica'

const Color = styled.div(
  {
  },
  props => ({
    color: props.color,
    background: props.bg,
    padding: props.padding,
    margin: props.margin,
    borderRadius: props.radius,
    border: props.border,
  })    
)

Color.defaultProps = {
  color: ververica.white,
  bg: ververica.ververicaBlue,
  padding: '1em',
  margin: '0.5em 0',
  radius: '20px',
  border: 'none',
}

export default Color
