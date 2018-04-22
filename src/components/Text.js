import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.object
}

function Text ({
 text,
 textStyle
}) {
  
  let style = {
    textAlign: 'center'
  }

  if(textStyle) {
    Object.assign(style, textStyle)
  }

  return (
    <p style={style}>{text}</p>
  )
}

Text.PropTypes = propTypes

export default Text
