import React from 'react'
import { useDeck } from 'mdx-deck'
import { Image } from 'mdx-deck'
import * as ververica from '../themes/ververica'
import { Styled } from 'theme-ui';
import { modes } from 'gatsby-theme-mdx-deck/src/constants.js'

const heightOfLogo = '30px'

const doNotWantBranding = mode => (
    (mode === modes.presenter || mode === modes.overview || mode === modes.grid || mode === modes.print) ? 'none' : ''
)

const PageNumber  = ({ pageNumber }) => (
    <p css={{
        minWidth: '36px',
        textAlign: 'right',
    }}>
    {pageNumber > 0 ? pageNumber : ''}
    </p>
)

const VerticalBar = ({ pageNumber }) => (
    <div
    css={{
    display: pageNumber > 0 ? 'inline-block' : 'none',
    borderLeft: '2px solid lightgray',
    paddingLeft: '10px',
    marginLeft: '10px',
    height: '24px',
    }} />
)

const BrandedFooter = ({ pageNumber, mode }) => (
    <div css={{
        display: doNotWantBranding(mode),
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100vw',
        background: ververica.white,
        zIndex: 100,
        }}>
        <div
            css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: ververica.ververicaLight,
            }}
        >
            <div
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    color: ververica.ververicaLight,
                }}
            >
                <PageNumber pageNumber = { pageNumber } />
                <VerticalBar pageNumber = { pageNumber } />
                <p>&copy; 2019 Ververica</p>
            </div>
            <Image 
                src={'/images/avvDS-JR_400x400.png'} 
                size={heightOfLogo}
                width={heightOfLogo}
                height={heightOfLogo}
                style={{margin: '10px 15px'}} />
        </div>
    </div>
)
  
const Provider = props => {
    const state = useDeck()

    return (
        <Styled.root>
        <div css={{
            position: 'relative',
            top: 0,
        }}>
            <div css={{
                fontSize: `calc(100vw/40)`
            }}>
                {props.children}
            </div>
            <a href='/'>
            <BrandedFooter pageNumber = {state.index} mode = {state.mode} />
            </a>
        </div>
        </Styled.root>
    )
}

export default Provider
