import React from 'react';

const CreatorList = ({result}) => {
  return (
    <div className="ui grid container">
      {result !== '' ? result.results.map(result => <div className="ui eight wide column"><h1>{result.firstName} {result.lastName}</h1></div>) : ""}
    </div>
  )
}

export default CreatorList;
