import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  src: PropTypes.string.isRequired,
}

function Logo ({
 src,
}) {
  
  let style = {
    width: '500px'
  }
  
  return (
    <img
      src={src}
      style={style} />
  )
}

Logo.PropTypes = propTypes

export default Logo
