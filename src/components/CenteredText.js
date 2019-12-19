import styled from '@emotion/styled'

const CenteredText = styled.div(
    {
        textAlign: 'center',
    },
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontSize: props.fontSize,
    })    
)

CenteredText.defaultProps = {
    margin: 'inherit',
    padding: 'inherit',
    fontSize: 'inherit',
}
    
export default CenteredText
