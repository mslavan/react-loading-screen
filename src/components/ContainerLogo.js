import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

function ContainerLogo ({
 loading,
 children
}) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

ContainerLogo.PropTypes = propTypes

export default ContainerLogo
