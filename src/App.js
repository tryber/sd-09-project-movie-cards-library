import React from 'react';

import './App.css';

import MovieList from './components/MovieList';
import Header from './components/Header';
import { movies } from './data.js';

class App extends React.Component {
  render() {
    return (
    <main className="App">
      <Header />
      <MovieList movies={ movies } />
    </main>
    );
  }
}

export default App;
