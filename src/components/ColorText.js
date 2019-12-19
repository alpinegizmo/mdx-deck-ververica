import styled from '@emotion/styled'
import * as ververica from '../themes/ververica'


export const ColorText = styled.div(
    props => ({
        color: props.color,
    }) 
)

ColorText.defaultProps = {
    color: ververica.black,
}

export const Danger = styled.div(
    ({
        display: 'inline-block',
        color: ververica.red,
    }) 
)

export const Success = styled.div(
    ({
        display: 'inline-block',
        color: ververica.green,
    }) 
)

export const Vv = styled.div(
    ({
        display: 'inline-block',
        color: ververica.ververicaBlue,
    }) 
)

export default ColorText
