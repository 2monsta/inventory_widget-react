import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Inventory from './Inventory'
class App extends Component {
  render() {
    return (
      <div className="App container">
				<div className="row">
					<SearchBar />
				</div>
				<div className="row">
					<Inventory />
				</div>
      </div>
    );
  }
}

export default App;
