import React, { Component } from "react";

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.movie.name}</h1>
        <p>{this.props.movie.price}</p>
      </div>
    );
  }
}
