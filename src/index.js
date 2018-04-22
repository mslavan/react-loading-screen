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
  textColor:       PropTypes.string,
  loading:         PropTypes.bool.isRequired,
  logoSrc:         PropTypes.string,
  text:            PropTypes.string,
}

function LoadingScreen ({
  children,
  backgroundColor,
  spinnerColor,
  textColor,  
  loading,
  logoSrc,
  logoRounded,
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
              src={logoSrc}
              rounded={logoRounded}/>}
          
          {loading &&
            <Spinner 
              name="ball-beat" 
              fadeIn="quarter" 
              color={spinnerColor}/>}
          
          {text && 
            <Text 
              text={text} 
              textColor={textColor}/>}
          
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
