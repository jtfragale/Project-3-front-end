import React, { Component } from 'react'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Roster from '../Roster/Roster'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Global Cup!</h1>
        </header>
      </div>
    )
  }
}

export default App