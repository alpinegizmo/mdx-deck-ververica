import styled from '@emotion/styled'

const Relative = styled.div(
    {
        position: 'relative',
    },
    props => ({
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right,
    })    
)

Relative.defaultProps = {
    top: 'inherit',
    left: 'inherit',
    bottom: 'inherit',
    right: 'inherit',
}


export default Relative
