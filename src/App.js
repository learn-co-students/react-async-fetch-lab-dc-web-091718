import React, { Component } from 'react';

const URL = 'http://api.open-notify.org/astros.json'

class App extends Component {
  state = {
    people: ""
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        people: data.people
      })
    })
  }

  render() {
    return (
      <div>
      <p> </p>
      </div>
    )
  }
}

export default App
