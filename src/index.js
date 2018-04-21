import React from 'react'
import PropTypes from 'prop-types'

class LoadingScreen extends React.Component {

  render() {

    const {
      children,
      loading,
    } = this.props

    return (
        <div>
          <div className="loading-screen-root">
            <img src='/images/logo-big.png' className="loading-screen-logo"/>
          </div>

          <div style={{ display: "none" }}>{children}</div>
        </div>
    )
  }

}

LoadingScreen.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoadingScreen;
