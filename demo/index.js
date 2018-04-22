import React from 'react'
import ReactDOM from 'react-dom'

import LoadingScreen from '../src'

class Demo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    // fake promise
    setTimeout(() =>
      this.setState({ loading: false })
    , 1500)
  }

  render () {
    const { loading } = this.state

    return (
      <LoadingScreen
        loading={loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'
        text='Here an introduction sentence (Optional)'
      >
        <div style={{ textAlign: 'center' }}>
          <h1>react-screen-loading</h1>
          <p>Example of usage loading-screen, based on React</p>
          <img src='https://cdn-images-1.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png' style={{ maxWidth: '100%' }} />
          <h2>Github repository: <a href='https://github.com/mslavan/loading-screen' target='_blank'>https://github.com/mslavan/react-loading-screen</a></h2>
          <h2>Find me in linkedIn: <a href='https://www.linkedin.com/in/slava-mikhailenko-71295a144' target='_blank'>https://www.linkedin.com/in/slava-mikhailenko-71295a144</a></h2>
        </div>
      </LoadingScreen>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'))
