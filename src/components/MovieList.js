import React, { Component } from "react";
import { Context } from "../MovieContext";
import Movie from "./Movie";

export default class MovieList extends Component {
  static contextType = Context;

  render() {
    const [movieList, updateState] = this.context;
    console.log(movieList.movieList);
    return (
      <div>
        <h1>Test</h1>
        {movieList.movieList.map((movie) => {
          return <Movie name={movie.name} price={movie.price} />;
        })}
      </div>
    );
  }
}
