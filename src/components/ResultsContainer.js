import React, { Component } from 'react';

export default class ResultsContainer extends Component {

  determineResults = () => {
    switch (this.props.filter) {
      case 'comics':
        return <p>{this.props.result !== '' ? this.props.result.results[0].title : ""}</p>;
      case 'characters':
        return <p>{this.props.result !== '' ? this.props.result.results[0].name : ""}</p>;
      case 'creators':
        return <p>{this.props.result !== '' ? this.props.result.results[1].firstName : ""}</p>;
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
