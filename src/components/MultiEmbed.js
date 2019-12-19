import React from 'react'
import { Embed } from './'

export const MultiEmbed = props => {
    return props.slides.map ((slide, i) => {
        return <Embed 
            src={props.deck} 
            slide={slide} 
            key={i} />
    } )
}