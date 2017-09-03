import React from 'react';

const ComicList = ({result}) => {
  return (
    <div className="ui grid container">
      {result !== '' ? result.results.map(result => <div className="ui eight wide column"><h1>{result.title}</h1><p>{result.description}</p></div>) : ""}
    </div>
  )
}

export default ComicList;

