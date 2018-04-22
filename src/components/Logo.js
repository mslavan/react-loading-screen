import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../media.conf.js'

const Image = styled.img`
  margin-bottom: 20px;
  border-radius: ${props => props.rounded ? '10%' : '0px'};

  ${media.largest`
    width: 150px;
    max-height: 175px;
  `}

  ${media.desktop`
    width: 120px;
    max-height: 135px;
  `}

  ${media.tablet`
    width: 100px;
    max-height: 115px;
  `}

  ${media.phone`
    width: 80px;
    max-height: 90px;
  `}
`

const propTypes = {
  src: PropTypes.string.isRequired,
  rounded: PropTypes.bool
}

function Logo ({
 src,
 rounded
}) {
  return (
    <Image
      rounded
      src={src} />
  )
}

Logo.PropTypes = propTypes

export default Logo
