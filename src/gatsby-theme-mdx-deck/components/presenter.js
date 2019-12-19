import React from 'react'
import { Slide } from './slide'
import Footer from 'gatsby-theme-mdx-deck/src/components/presenter-footer'
import Zoom from 'gatsby-theme-mdx-deck/src/components/zoom'
import { useDeck } from 'mdx-deck'
import Note from '../../components/note'

const bgcolor = '#333'
const ratio = 16 / 9

const ZoomB = ({ ratio, zoom = 1, ...props }) => (
  <div
    css={{
      boxSizing: 'border-box',
      width: '100%',
      position: 'relative',
      height: '0',
      paddingBottom: ratio ? `${(1 / ratio) * 100}%` : 0,
    }}>
    <div
      {...props}
      css={{
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: bgcolor,
        width: `${(1 / zoom) * 100}%`,
        height: `${(1 / zoom) * 100 * (1 / ratio)}%`,
        transformOrigin: '0 0',
        transform: `scale(${zoom})`,
      }}
    />
  </div>
)

const Presenter = ({ slides, children }) => {
    const context = useDeck()
    const next = slides[context.index + 1]
    const prev = slides[context.index - 1]
    const notes = context.notes ? React.Children.toArray(context.notes) : false

    const notesFraction = 52
    const slideFraction = 45
  
    return (
      <div
        className='presenter'
        style={{
          color: 'white',
          backgroundColor: bgcolor,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <div
          style={{
            marginTop: '20px',
            marginBottom: 'auto',
            display: 'flex',
            height: '97vh',
            flexDirection: 'row',
          }}
        >
        
          <div
            style={{
              width: slideFraction + 'vw',
              minWidth: 0,
              height: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Zoom
              ratio={ratio} 
              zoom={slideFraction / 100}
              >
                {children}
            </Zoom>
            <div
              style={{
                marginTop: '2vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'auto',
                width: '100%',
              }}
            >
              <ZoomB
              ratio={ratio} 
              zoom={0.218}
              >
                  <Slide slide={prev} height={'56.25vw'} preview />
              </ZoomB>
              <div style={{width: '5vh'}} />
              <ZoomB
              ratio={ratio} 
              zoom={0.218}
              >
                  <Slide slide={next} height={'56.25vw'} preview />
              </ZoomB>
            </div>
          </div>

          <div
            style={{
              width: notesFraction + 'vw',
              overflowY: 'scroll',
              maxHeight: '100%',
              paddingRight: 15,
            }}
          >
            <Note>{notes}</Note>
          </div>
        </div>
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          fontSize: '0.7em',
          fontWeight: 'bold',
          backgroundColor: 'rgba(235, 230, 230, 0.59)',
          margin: 0,
          padding: '0 1em',
          color: 'white',
          }}
        >
          <Footer />
        </div>
      </div>
    )
  }
  
  export default Presenter