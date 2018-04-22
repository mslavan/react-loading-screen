import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  backgroundColor: PropTypes.string,
  loading:         PropTypes.bool.isRequired
}

function Root ({
 children,
 loading,
 backgroundColor
}) {

  let style = {
      position: 'relative',
      textAlign: 'center',
      background: backgroundColor || '#efefef',
      width: '100%',
      height: '100%',
      zIndex: '9999999999',

      opacity: loading ? 1 : 0,
      WebkitTransition: 'opacity 0.2s ease-out',
      MozTransition: 'opacity 0.2s ease-out',
      MsTransition: 'opacity 0.2s ease-out',
      OTransition: 'opacity 0.2s ease-out'
  }

  return (
    <div 
      style={style}
    >
      {children}
    </div>
  )
}

Root.PropTypes = propTypes

export default Root
