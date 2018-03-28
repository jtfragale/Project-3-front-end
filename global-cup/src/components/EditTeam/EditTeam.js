import React, { Component } from 'react'
import axios from 'axios'

class EditTeam extends Component {
  constructor() {
    super()

    this.state = {}
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .put('http://localhost:4000/teams/edit/:id', {
        name: this.state.name,
        color: this.state.color,
        captain: {
          firstName: this.state.firstname,
          lastName: this.state.lastname,
          email: this.state.email
        },
        players: [
          {
            firstName: this.state.firstname1,
            lastName: this.state.lastname1,
            position: this.state.position1
          },
          {
            firstName: this.state.firstname2,
            lastName: this.state.lastname2,
            position: this.state.position2
          },
          {
            firstName: this.state.firstname3,
            lastName: this.state.lastname3,
            position: this.state.position3
          },
          {
            firstName: this.state.firstname4,
            lastName: this.state.lastname4,
            position: this.state.position4
          },
          {
            firstName: this.state.firstname5,
            lastName: this.state.lastname5,
            position: this.state.position5
          },
          {
            firstName: this.state.firstname6,
            lastName: this.state.lastname6,
            position: this.state.position6
          },
          {
            firstName: this.state.firstname7,
            lastName: this.state.lastname7,
            position: this.state.position7
          },
          {
            firstName: this.state.firstname8,
            lastName: this.state.lastname8,
            position: this.state.position8
          },
          {
            firstName: this.state.firstname9,
            lastName: this.state.lastName9,
            position: this.state.position9
          },
          {
            firstName: this.state.firstname10,
            lastName: this.state.lastname10,
            position: this.state.position10
          },
          {
            firstName: this.state.firstname11,
            lastName: this.state.lastname11,
            position: this.state.position11
          }
        ]
      })
      .then(() => {
        console.log('success')
      })
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">Team Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="captain">Captain:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.captain.firstName}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="players">Player 1:</label>
            <input
              type="text"
              name="firstname1"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname1"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position1"
              value={this.state.position1}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 2:</label>
            <input
              type="text"
              name="firstname2"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname2"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position2"
              value={this.state.position2}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 3:</label>
            <input
              type="text"
              name="firstname3"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname3"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position3"
              value={this.state.position3}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 4:</label>
            <input
              type="text"
              name="firstname4"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname4"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position4"
              value={this.state.position4}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 5:</label>
            <input
              type="text"
              name="firstname5"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname5"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position5"
              value={this.state.position5}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 6:</label>
            <input
              type="text"
              name="firstname6"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname6"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position6"
              value={this.state.position6}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 7:</label>
            <input
              type="text"
              name="firstname7"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname7"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position7"
              value={this.state.position7}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 8:</label>
            <input
              type="text"
              name="firstname8"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname8"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position8"
              value={this.state.position8}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 9:</label>
            <input
              type="text"
              name="firstname9"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname9"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position9"
              value={this.state.position9}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 10:</label>
            <input
              type="text"
              name="firstname10"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname10"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position10"
              value={this.state.position10}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 11:</label>
            <input
              type="text"
              name="firstname11"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastname11"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <select
              name="position11"
              value={this.state.position11}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">Team Color:</label>
            <select
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="gray">Gray</option>
              <option value="pink">Pink</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditTeam
