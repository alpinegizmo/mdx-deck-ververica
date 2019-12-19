import React from 'react'
import { Image } from 'mdx-deck'

const CaptionedImage = props => (
  <>
    <Image {...props} />
    {props.caption}
  </>
)
  
export default CaptionedImage
