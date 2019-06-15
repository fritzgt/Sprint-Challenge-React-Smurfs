import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Smurf extends React.Component {
  //Delete selected smurf
  deleteSmurf = () => {
    console.log("Click");
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(res => {
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
        {/* <Link to={`/${this.props.id}`}>Delete</Link> */}

        <button onClick={this.deleteSmurf}>X</button>
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
