import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

const HandsOn = props => (
  <a href={`/exercises/${props.name}`}>
    <FontAwesomeIcon className='fa-s' icon={props.icon} />
  </a>
)

HandsOn.defaultProps = {
  icon: faKeyboard,
}

export default HandsOn
