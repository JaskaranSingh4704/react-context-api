import React, { Component } from "react";

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
      </div>
    );
  }
}
