import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Smurf extends React.Component {
  //Delete selected smurf
  deleteSmurf = e => {
    e.preventDefault();
    // const id = this.props.match.params.id;
    console.log("Click id=");

    axios
      .delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(res => {
        // Calling method on app.js to setState and triger re-render
        this.props.deleteSmurf(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <Link to={`/${this.props.id}`} onClick={this.deleteSmurf}>
          Delete
        </Link>

        {/* <button onClick={this.deleteSmurf}>X</button> */}
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
