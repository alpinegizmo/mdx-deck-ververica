import React from 'react'
import useSteps from 'gatsby-theme-mdx-deck/src/hooks/use-steps'

export const OneAtATime = props => {
  const arr = React.Children.toArray(props.children)
  const step = useSteps(arr.length - 1)
  const children = arr.map((child, i) =>
    i === step ? child : <></>
  )

  return <>{children}</>
}

export default OneAtATime
