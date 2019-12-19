import React from 'react'
import * as ververica from '../themes/ververica'

export default props => (
  <div className='brand' 
    style={{
    display: 'flex',
    position: 'relative',
    marginLeft: `calc((${ververica.slideWidth} - 100vw) / 2)`,
    marginTop: '-15vh',
    height: '15vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'flex-end',
    background: ververica.white,
    zIndex: 10000,
  }}>
    <img
      src='/images/ververica.png'
      alt='ververica'
      style={{
        marginRight: '4vh',
        height: '12vh',
      }}
    />
  </div>
)