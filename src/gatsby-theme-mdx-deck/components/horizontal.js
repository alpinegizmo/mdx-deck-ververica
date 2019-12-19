import React from 'react'

export const Horizontal = ({ ...props }) => {
  const children = React.Children.toArray(props.children)

  return (
    <div
      {...props}
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        height: '100%',
        textAlign: 'left',
        background: props.background,
      }}>
      {children.map((child, i) => (
        <div key={child.key} css={{ width: 100 / children.length + '%' }}>
          {child}
        </div>
      ))}
    </div>
  )
}

Horizontal.defaultProps = {
  background: 'inherit',
}

export default Horizontal