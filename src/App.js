import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchForm from './components/FetchForm.js'
import ListItem from './components/ListItem.js'
import { sortComparator } from './utis.js'
import FilterForm from "./components/FilterForm";
import Stact from './components/Stact'

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {

    state= {
        fetchData:[],
        visibleData:[],
    }
    filterForm=( text)=>{
        console.log(text)
    }
  fetchForm = (numberOfItemsToFetch) => {
  fetch(API_URL + numberOfItemsToFetch)
      .then(response => response.json())
      .then(Object.values)
      .then(fetchData => fetchData.sort (sortComparator))
      .then(fetchData => {
        this.setState({
         fetchData,
         visibleData:fetchData,
        })
      console.log(fetchData);
      })
  }

  filterForm= (filterbyText)=>{
        const  {fetchData} = this.state
        const visibleData= fetchData.filter(item => {
            return item.title.toLowerCase().
            indexOf(filterbyText.toLowerCase()) !== -1
        })
      this.setState({
          visibleData
      })
  }


  render() {
      const {visibleData}= this.state
    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchForm}/>

          <div>
              <FilterForm onSubmit={this.filterForm}/>
              <div>
                  {visibleData.map(({id,title,image,rating } ) => (
                      <ListItem key={id}
                                title={title}
                                image={image}
                                rating={rating}/>
                  ))}
              </div>
              <Stact data = {visibleData}/>
          </div>


      </div>
    );
  }
}

export default App;
