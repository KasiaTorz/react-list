import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchForm from './components/FetchForm.js'
const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='


class App extends Component {
  fetchForm = (numberOfItemsToFetch) => {
  fetch(API_URL + numberOfItemsToFetch)
      .then(response => response.json())
      .then(json => {
        console.log (json)
      })
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
