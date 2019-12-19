import React from 'react'
import { Box, Flex } from 'reflexbox'

const Center = props => {
  const kids = React.Children.toArray(props.children)
  const w = props.width

  return (
    <Flex
      css={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
      style={{...props.style}}>
      <Box key={'first'} width={(1-w)/2} />
      {kids.map(child => (
        <Box key={child.key} width={w / kids.length}>
          {child}
        </Box>
      ))}
      <Box key={'last'} width={(1-w)/2} />
    </Flex>
  )
}

export default Center
