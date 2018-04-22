import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node
}

function ChildrenWrapper ({
 loading,
 children
}) {
  const style = {
	  display: loading ? "none" : "block",
  	position: "absolute",
  	top: 0,
  	left: 0
  }

  return (
    <div style={style}>{children}</div>
  )
}

ChildrenWrapper.PropTypes = propTypes

export default ChildrenWrapper
