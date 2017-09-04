import React, { Component } from 'react';
import CharacterList from './CharacterList';
import ComicList from './ComicList';
import CreatorList from './CreatorList';

export default class ResultsContainer extends Component {

  render() {
    switch (this.props.filter) {
      case 'comics':
        return <div><ComicList result={this.props.result}/></div>
      case 'characters':
        return <div><CharacterList result={this.props.result}/></div>
      case 'creators':
        return <div><CreatorList result={this.props.result}/></div>
      default:
        return <p></p>
    }
  }
}
