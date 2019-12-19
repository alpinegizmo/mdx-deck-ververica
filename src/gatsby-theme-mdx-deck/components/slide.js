import React from 'react'
import Context from 'gatsby-theme-mdx-deck/src/context.js'
import { useDeck } from 'gatsby-theme-mdx-deck'
import { modes } from 'gatsby-theme-mdx-deck/src/constants.js'
import { useSwipe } from 'gatsby-theme-mdx-deck/src/hooks/use-swipe.js'
import * as ververica from '../../themes/ververica'

const Note = ({ props }) => {
  const outer = useDeck()

  const notes = outer.metadata[outer.index] ? React.Children.toArray(outer.metadata[outer.index].notes) : false

  return <div
    style={{
      width: '100vw',
      height: '100vh',
      padding: '5vh 10vh',
      overflow: 'hidden',
      fontSize: '1.0em',
      pageBreakAfter: 'always',
      pageBreakInside: 'avoid',
      WebkitPrintColorAdjust: 'exact',
    }}
  >
    { notes ? <div style={{
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '1em',
    }}>Notes for Slide {outer.index}</div> : <> </> }
    {notes}
  </div>
}

export const Slide = ({ slide, index, preview, notes, ...props }) => {
  const outer = useDeck()
  const swipeProps = useSwipe()
  const context = {
    ...outer,
    index,
    preview,
  }

  const printing = context.mode === modes.print ? 'printing' : ''

  return (
    <Context.Provider value={context}>
      <div
        {...(!preview ? swipeProps : {})}
        css={{
          boxSizing: 'border-box',
          width: context.mode === modes.print ? '100vw' : '100%',
          height: context.mode === modes.print ? '100vh' : props.height,
          display: 'block',
          marginLeft: 0,
          padding: `0 calc((100vw - ${ververica.slideWidth}) / 2)`,
          backgroundColor: ververica.white,
          color: ververica.black,
          overflow: 'hidden',
          position: 'relative',
          top: 0,
          textAlign: 'left',
          pageBreakAfter: 'always',
          pageBreakInside: 'avoid',
          WebkitPrintColorAdjust: 'exact',
        }}>
          <div 
          className={`slide ${printing}`}
          css={{
                    minWidth: ververica.slideWidth,
                    maxWidth: ververica.slideWidth,
                    minHeight: ververica.slideHeight,
                    maxHeight: ververica.slideHeight,              
          }}>
            {slide}
          </div>
      </div>
        { notes && <Note /> }
    </Context.Provider>
  )
}

Slide.defaultProps = {
  height: '100%',
}

export default Slide
