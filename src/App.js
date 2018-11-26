import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state={
      people: []
    }
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ people: data.people })
      })
  }

  render() {
    return(
      <div>
        {this.state.people.map((person, id) => <p key={id}>{person.name}</p>)}
      </div>
    )
  }
}

export default App