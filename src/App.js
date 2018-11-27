// create your App component here
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      spacemenList: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => this.setState({spacemenList: data.people}))
  }
  render() {
    return (
      <div>
        {this.state.spacemenList.map(spaceman=> spaceman.name)}
      </div>
    )
  }
}

export default App
