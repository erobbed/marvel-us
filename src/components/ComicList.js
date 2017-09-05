import React from 'react';
import ComicCard from './ComicCard'

const ComicList = ({result}) => {
  return (
    <div className="ui cards">
      {result !== '' ? result.results.map((r, index) => <div key={index} className="card"><ComicCard comic={r}/></div>) : ""}
    </div>
  )
}

export default ComicList;
