import React, { Component } from 'react';

export default class ResultsContainer extends Component {

  determineResults = () => {
    switch (this.props.filter) {
      case 'comics':
        return <div className="ui grid container">{this.props.result !== '' ? this.props.result.results.map(result => <div className="ui eight wide column">{result.title}</div>) : ""}</div>;
      case 'characters':
        return <div className="ui grid container">{this.props.result !== '' ? this.props.result.results.map(result => <div className="ui eight wide column">{result.name}</div>) : ""}</div>;
      case 'creators':
        return <div className="ui grid container">{this.props.result !== '' ? this.props.result.results.map(result => <div className="ui eight wide column">{result.firstName}</div>) : ""}</div>;
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
