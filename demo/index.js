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
    , 5000)
  }

  render () {
    const { loading } = this.state

    return (
      <LoadingScreen 
      	loading={loading}
      	backgroundColor='#fff'
        spinnerColor='#ffa53a'
        textColor='#057bb2'
        logoSrc="https://lh3.googleusercontent.com/-zFVbSA6crcI/AAAAAAAAAAI/AAAAAAAAAA4/bwVOMmXMH3I/s640/photo.jpg"
        logoRounded={true}
        text="Book sanatoriums online "
      >
        <h1>Demo app</h1>
        <p>Example of usage loading-screen , based on React</p>
      </LoadingScreen>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'))
