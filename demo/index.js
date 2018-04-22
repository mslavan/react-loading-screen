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
    , 3000)
  }

  render () {
    const { loading } = this.state

    return (
      <LoadingScreen 
      	loading={loading}
      	backgroundColor='gray'
        spinnerColor='white'
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        text="Facebook - founders of React"
        textStyle={{ 
          color: 'white',
          fontSize: '32px',
        }}
      >
        <h1>Demo app</h1>
        <p>Example of usage loading-screen , based on React</p>
      </LoadingScreen>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'))
