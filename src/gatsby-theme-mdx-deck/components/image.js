import styled from '@emotion/styled'
import * as ververica from '../../themes/ververica'

function ImageSrc(src) {
  return src.startsWith("http") ? src : `${ververica.imageHost}${src}`
}

export const Image = styled.div(
  {
    backgroundRepeat: 'no-repeat',
  },
  props => ({
    margin: props.margin,
    backgroundPosition: props.position,
    backgroundSize: props.size,
    width: props.width,
    height: props.height,
    backgroundImage: `url(${ImageSrc(props.src)})`,
  })
)

Image.defaultProps = {
  size: 'cover',
  width: '100vw',
  height: '100vh',
  position: 'left top',
  margin: 'inherit',
}

export default Image
