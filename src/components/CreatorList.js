import React from 'react';
import Creator from './Creator'

const CreatorList = ({result}) => {
  return (
    <div className="ui cards">
      {result !== '' ? result.results.map((r, index) => <div key={index} className="card"><Creator creator={r} /></div>) : ""}
    </div>
  )
}

export default CreatorList;
