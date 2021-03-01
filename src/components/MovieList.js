import React, { Component } from "react";
import { Context } from "../MovieContext";
import Movie from "./Movie";

export default class MovieList extends Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <h1>Test</h1>
        <React.Fragment>
          <Context.Consumer>
            {([stateData, stateHandler]) => {
              return <p>Inside consumer {console.log(stateData.stateData)}</p>;
            }}
          </Context.Consumer>
        </React.Fragment>
      </div>
    );
  }
}
