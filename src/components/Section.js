import React from 'react'
import styled from '@emotion/styled'
import { Image } from 'mdx-deck'
import Brand from './Brand'
import * as ververica from '../themes/ververica'
 
const Break = styled.div(
    props => ({
        position: 'relative',
        top: 0,
        left: `calc((${ververica.slideWidth} - 100vw) / 2)`,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingLeft,
        width: props.width,
        maxWidth: '100vw !important',
        height: '100vh',
        maxHeight: '100vh !important',
        textAlign: props.textAlign,
        display: 'flex',
        flexDirection: 'column',
        alignItems: props.alignItems,
        justifyContent: 'center',
        color: ververica.white,
        backgroundColor: props.backgroundColor,
        h1: {
            fontSize: '1.8em !important',
            color: ververica.white,
        },
    })
)
 
Break.defaultProps = {
    paddingLeft: `calc((100vw - ${ververica.slideWidth}) / 2) !important`,
    textAlign: 'inherit',
    alignItems: 'flex-start',
    width: '100vw',
    backgroundColor: ververica.ververicaBlue,
}
 
const Ribbon = styled.div(
    {
        margin: '20px 0 30px 0',
        height: '10px',
        width: '250px',
        backgroundColor: ververica.white,
    }
)
 
export const Chapter = props => {
    const arr = React.Children.toArray(props.children)
    return <Break 
    className='chapter'
    textAlign='center'
    alignItems='center'
    paddingLeft='0'
    >
            { arr }
    </Break>
}
 
export const Section = props => {
    const arr = React.Children.toArray(props.children)
    return <Break 
    css={{ zIndex: 10000 }} 
    className='section'>
        <div>
            <Ribbon />
            { arr }
        </div>
    </Break>
}
 
export const Title = props => {
    const [a, ...rest] = React.Children.toArray(props.children)
    return <div>
        <Break {...props} className='title'>
            { a }
            <Ribbon css={{
                backgroundColor: ververica.white,
            }} />
            { rest }
        </Break>
        <Brand></Brand>
    </div>
}

export const ClosingSlide = props => (
    <FullScreen backgroundColor={ververica.ververicaBlue}>
        <a href="/">
        <Image {...props} position={'center'} />
        </a>
    </FullScreen>
)
 
ClosingSlide.defaultProps = {
    src: '/images/ververica-vertical.png',
    size: '60%',
}
 
export const FullScreen = props => {
    const kids = React.Children.toArray(props.children)
    return <Break 
        className='fullscreen'
        css={{ zIndex: 10000 }} 
        backgroundColor={props.backgroundColor}
        paddingLeft='0'>
        { kids }
    </Break>
}

FullScreen.defaultProps = {
    backgroundColor: ververica.white,
}