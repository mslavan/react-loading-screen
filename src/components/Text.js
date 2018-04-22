import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../media.conf.js'

const Title = styled.p`
  text-align: 'center';
  word-wrap: break-word;
  color: ${props => props.color ? props.color : '#676767'}

  ${media.largest`
    font-size: 30px;
  `}

  ${media.desktop`
    font-size: 22px;
  `}

  ${media.tablet`
    font-size: 20px;
  `}

  ${media.phone`
    font-size: 15px;
  `}
`

const propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
}

function Text ({
 text,
 textColor
}) {

  return (
    <Title color={textColor}>{text}</Title>
  )
}

Text.PropTypes = propTypes

export default Text
