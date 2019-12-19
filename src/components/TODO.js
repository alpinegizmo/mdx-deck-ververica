import React from 'react'

export const TODO = ({ ...props }) => {
    const kids = React.Children.toArray(props.children)
  
    return (
      <div css={{ display: 'none' }}>
        {kids}
      </div>
    )
}
    
export default TODO
