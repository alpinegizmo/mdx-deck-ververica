import React from 'react'
import ReactSVG from 'react-svg'
import * as ververica from '../themes/ververica.js'

const SVG = (props) => (
  <ReactSVG style={{padding: props.padding, ...props}} src={`${ververica.imageHost}${props.src}`} beforeInjection={svg => {
    svg.setAttribute('width', props.width)
    svg.setAttribute('height', 'auto')
  }} />
)

SVG.defaultProps = {
  padding: '0.5em',
  width: '100%',
}

export default SVG
