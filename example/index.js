/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom';

import LoadingScreen from '../src';

import '../loading-screen.css'

class Example extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        loading: true
    }
  }

  componentWillMount() {
    setTimeOut( 3000, 
      () => this.setState({ loading: false }))
  }

  render () {
    const { loading } = this.state;

    return (
      <div>
        <LoadingScreen 
          loading={loading} 
        >
            <h1>Demo app</h1>
            <p>Example of usage loading screen for React</p>
        </LoadingScreen>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
