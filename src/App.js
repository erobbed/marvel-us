import React, { Component } from 'react';

import './App.css';
import ResultsContainer from './components/ResultsContainer'
import md5 from 'js-md5'

class App extends Component {

  constructor(){
    super()

    this.state = {
      result: "",
      filter: '',
      userInput: ''
    }
  }


  getResults = (event) => {
    event.preventDefault()
    let filter = this.state.filter
    let query = (filter === 'comics' ? `titleStartsWith=${this.state.userInput}` : `nameStartsWith=${this.state.userInput}`)
    console.log(query);
    let ts = new Date().getTime();
    const apikey = '16ebd0ee914895c73c269bc0c22c2a03'
    const privatekey = 'b4f4740799d5faf7a3dc5227f9c73d8824a2b440'
    const Url= `http://gateway.marvel.com/v1/public/${filter}?${query}&ts=${ts}&apikey=${apikey}&hash=${md5(ts+privatekey+apikey)}`
    //this is a temporary URL that will eventually be an interpolation of arguments passed into get results from the search bar
    if (this.state.filter !== ""){
      fetch(Url)
      .then(res => res.json())
      .then(res => this.setState({
          result: res.data
        })
      )
    }
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div >
          <img src='./The_Marvel_Universe.png' alt="logo"/>
          <h2>Welcome to Marvel Selector</h2>
        </div>
        <select className="ui search dropdown" onChange={this.handleChange} value={this.state.filter}>
          <option value=""></option>
          <option value="characters">Character</option>
          <option value="comics">Comic</option>
          <option value="creators">Creator</option>
        </select>
        <div className="ui search">
          <div className="ui icon input">
            <form onSubmit={this.getResults}>
              <input type="text" onChange={this.handleUserInput}/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
          <ResultsContainer result={this.state.result} filter={this.state.filter}/>
        </div>
      </div>
    );
  }
}

export default App;
