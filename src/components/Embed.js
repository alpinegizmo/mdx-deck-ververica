import React from 'react'
import GoogleFonts from '@mdx-deck/components/src/GoogleFonts'
import {
  Provider, Slide, splitSlides, Zoom
} from '@mdx-deck/components'

const Placeholder = ({ index }) => (
  <pre style={{ fontSize: 16 }}>not found: slide {index}</pre>
)

const wrapper = props => {
  const { slides, theme, themes, zoom } = splitSlides(props)
  const Content = slides[props.slide - 1] || Placeholder

  return (
    <Provider theme={theme} themes={themes} fontbase={30}>
      <GoogleFonts />
      <Zoom zoom={zoom}>
        <Slide>
          <Content index={props.slide - 1} />
        </Slide>
      </Zoom>
    </Provider>
  )
}

const Embed = ({ src: Deck, slide = 1, ratio = 9 / 16, zoom = 1 }) => (
  <Deck components={{ wrapper }} slide={slide} ratio={ratio} zoom={zoom} />
)

export default Embed
