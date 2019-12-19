import React from 'react'
import Flex from '@mdx-deck/layouts/src/Flex'
import Box from '@mdx-deck/layouts/src/Box'

const LeftRight = ( props ) => {
  const [a, ...rest] = React.Children.toArray(props.children)
  return (
    <Flex
      css={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
      }}
    >
      <Box width={props.left}>
      <Flex css={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        maxWidth: props.left,
      }}>{a}</Flex>
      </Box>
      <Box width={1 - props.left}>{rest}</Box>
    </Flex>
  )
}

LeftRight.defaultProps = {
    left: 0.5,
}
    
export default LeftRight