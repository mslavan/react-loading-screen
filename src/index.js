import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-spinkit'

import Root from './components/Root'
import ContainerLogo from './components/ContainerLogo'
import ChildrenWrapper from './components/ChildrenWrapper'
import Logo from './components/Logo'
import Text from './components/Text'

const propTypes = {
  children:        PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  spinnerColor:    PropTypes.string,
  loading:         PropTypes.bool.isRequired,
  logoSrc:         PropTypes.string,
  text:            PropTypes.string,
  textStyle:       PropTypes.object,
}

function LoadingScreen ({
  children,
  backgroundColor,
  spinnerColor,
  loading,
  logoSrc,
  text,
  textStyle
}) {

  const windowSizeBlock = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  }

  return (
    <div style={windowSizeBlock}>
      <Root 
        backgroundColor={backgroundColor} 
        loading={loading}
      >
        <ContainerLogo loading={loading}>
          {logoSrc && 
            <Logo 
              src={logoSrc}/>}
          
          {loading &&
            <Spinner name="ball-pulse-sync" color={spinnerColor}/>}
          
          {text && 
            <Text 
              text={text} 
              textStyle={textStyle}/>}
          
        </ContainerLogo>

      </Root>
      <ChildrenWrapper loading={loading}>
        {children}
      </ChildrenWrapper>    
    </div>
  )
}

LoadingScreen.propTypes = propTypes

export default LoadingScreen;
