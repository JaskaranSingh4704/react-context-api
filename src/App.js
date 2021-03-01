import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import React from "react";
import { MovieListProvider } from "./MovieContext";
class App extends React.Component {
  render() {
    return (
      <MovieListProvider>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <MovieList />
          </header>
        </div>
      </MovieListProvider>
    );
  }
}

export default App;
