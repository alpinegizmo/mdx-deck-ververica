import styled from '@emotion/styled'

const Iframe = styled.iframe(
    {
    },
    props => ({
        src: props.src,
        width: props.width,
        height: props.height,
        sandbox: props.sandbox,
    })    
)

Iframe.defaultProps = {
    width: '100%',
    height: '500',
    sandbox: 'allow-forms',
}


export default Iframe
