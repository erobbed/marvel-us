import React from 'react';
import Comic from './Comic'

const ComicList = ({result}) => {
  return (
    <div className="ui cards">
      {result !== '' ? result.results.map((r, index) => <div key={index} className="card"><Comic comic={r}/></div>) : ""}
    </div>
  )
}

export default ComicList;
