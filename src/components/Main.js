import React, { Component } from 'react';
import CharacterList from './CharacterList';
import ComicList from './ComicList';
import CreatorList from './CreatorList';

export default class ResultsContainer extends Component {

  render() {
    <div>
    <div>
          <br/>
          <h1 className="title">Welcome to the Marvel <br/> Search App</h1>
        </div>


        <div className="ui three item menu">
          <select className="ui compact menu" onChange={this.handleChange} value={this.state.filter}>
            <option value=""></option>
            <option value="characters">Character</option>
            <option value="comics">Comic</option>
            <option value="creators">Creator</option>
          </select>
          <div className="ui search">
            <div className="ui icon input">
              <form onSubmit={this.getResults}>
                <input type="text" onChange={this.handleUserInput} placeholder="enter your search here"/>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
        </div>
  }
}
