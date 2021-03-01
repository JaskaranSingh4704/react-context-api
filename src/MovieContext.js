import React, { createContext } from "react";
import App from "./App";
import MovieList from "./components/MovieList";

export const Context = createContext();

export class MovieListProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          id: 1,
          name: "carry On Jatta",
          price: 100,
        },
        {
          id: 2,
          name: "Ardaas",
          price: 300,
        },
        {
          id: 3,
          name: "Sarddar saab",
          price: 100,
        },
        {
          id: 4,
          name: "Avengers",
          price: 600,
        },
        {
          id: 5,
          name: "Jatt and Juliet",
          price: 900,
        },
      ],
    };
  }

  updateState = () => {
    this.setState({});
  };

  render() {
    return (
      <Context.Provider value={[this.state, this.updateState]}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
