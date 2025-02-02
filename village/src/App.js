import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    //Getting data from server
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //setState to trigger re-render comming from smurfForm
  addSmurf = data => {
    console.log(data);
    this.setState(() => ({
      smurfs: data
    }));
  };

  deleteSmurf = data => {
    console.log(data);
    this.setState(() => ({
      smurfs: data
    }));
  };

  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <nav>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
          <NavLink exact to="/smurf-form" activeClassName="selected">
            Add new Smurf
          </NavLink>
        </nav>

        {/* Route for the list of smurfs */}
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              deleteSmurf={this.deleteSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />

        {/* Route for the form to create new smurfs */}
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
