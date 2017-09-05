import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import md5 from 'js-md5'

class Character extends Component {
  constructor() {
    super()

    this.state = {
      character: "",
    }
  }

  componentWillMount() {
    this.getResults();
  }

 getResults = () => {
    let ts = new Date().getTime();
    const apikey = '16ebd0ee914895c73c269bc0c22c2a03'
    const privatekey = 'b4f4740799d5faf7a3dc5227f9c73d8824a2b440'
    const Url= `http://gateway.marvel.com/v1/public/characters/${this.props.match.params.character_id}?ts=${ts}&apikey=${apikey}&hash=${md5(ts+privatekey+apikey)}`
    console.log(Url)
    if (this.state.filter !== ""){
      fetch(Url)
      .then(res => res.json())
      .then(res => this.setState({
          character: res.data.results[0]
        })
      )
    }

  }

  render() {
    console.log(this.state.character)
    // debugger
    return (
      <div>
       <h1>{this.state.character.name}</h1>
      </div>
    )
  }

}

export default Character
