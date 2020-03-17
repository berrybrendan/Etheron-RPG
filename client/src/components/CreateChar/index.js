import React, { Component } from "react";

import Button from "../common/Button";
import API from "../../utils/API";

class CreateChar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      type: "",
      silver: 0,
      user: props.id,
      stats: {
        level: 1,
        maxhealth: 30,
        currenthealth: 30,
        str: this.randomizeStats(),
        int: this.randomizeStats(),
        speed: this.randomizeStats(),
        defense: this.randomizeStats()
      }
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    API.createCharacter(this.state);
  };

  randomizeStats = () => {
    const stat = Math.round(Math.random() * (12-5) + 5)
    return(stat)
  }

  render() {
    const { name, type } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="type"
              value={type}
              onChange={this.changeHandler}
            />
          </div>
          <Button type="submit" fullWidth variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateChar;
