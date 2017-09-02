import React, { Component } from 'react';

export default class ResultsContainer extends Component {

  determineResults = () => {
    switch (this.props.filter) {
      case 'comics':
        return <p>{this.props.result !== '' ? this.props.result.results.map(result => result.title) : ""}</p>;
      case 'characters':
        return <p>{this.props.result !== '' ? this.props.result.results.map(result => result.name) : ""}</p>;
      case 'creators':
        return <p>{this.props.result !== '' ? this.props.result.results.map(result => result.firstName) : ""}</p>;
      default:
        return <p></p>
    }
  }

  render() {
    return (
      <div>{this.determineResults()}</div>
    )
  }
}
