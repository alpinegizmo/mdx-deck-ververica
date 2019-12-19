import React from 'react'

export default props => (
  <div  className='note' style={{
    fontSize: '0.7em',
    lineHeight: 1.5,
    margin: '1vh 1.5vw',
    minWidth: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    }}>
      {props.children}
  </div>
)