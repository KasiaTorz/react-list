import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchForm from './components/FetchForm.js'
import ListItem from './components/ListItem.js'
const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='


class App extends Component {

    state= {
        fetchData:[]
    }

  fetchForm = (numberOfItemsToFetch) => {
  fetch(API_URL + numberOfItemsToFetch)
      .then(response => response.json())
      .then(Object.values)

      .then(fetchData => {
        this.setState({
         fetchData
        })

      })
  }


  render() {
      const {fetchData}= this.state
    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchForm}/>

        <div>
            {this.state.fetchData.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>

        <div>
            {this.state.fetchData.map(({id,title,image,rating } )=>(
                <ListItem key={id}
                          title={title}
                          image={image}
                          rating={ rating}/>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
