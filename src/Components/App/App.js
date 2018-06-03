import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import MainContent from "../MainContent/MainContent";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" component={Homepage} />
        <Route path="/" component={MainContent} />
      </div>
    );
  }
}

export default App;
