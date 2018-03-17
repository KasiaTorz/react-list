import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchForm from './components/FetchForm.js'

class App extends Component {
  fetchForm = (numberOfItemsToFetch) => {

  }


  render() {
    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchForm}/>

      </div>
    );
  }
}

export default App;
