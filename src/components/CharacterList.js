import React from 'react';

const CharacterList = ({result}) => (
  <div className="ui grid container">
    {result !== '' ? result.results.map(result => <div className="ui eight wide column"><h1>{result.name}</h1><p>{result.description}</p></div>) : ""}
  </div>
)


export default CharacterList;