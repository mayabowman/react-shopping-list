import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      list: []
    }
    this.changeUserInput = this.changeUserInput.bind(this)
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    })
  }

  addToList(input) {
    let listArray = this.state.list
    listArray.push(input)
    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="App">
          <input
            type='text'
            value={this.state.userInput}
            onChange={ (e) => this.changeUserInput(e.target.value)}
          />
          <button type='submit' onClick={ () => this.addToList(this.state.userInput)}>Add</button>
        <ul>
          {this.state.list.map(val => <li>{val}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;
