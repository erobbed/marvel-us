import React from 'react';
import CreatorCard from './CreatorCard'

const CreatorList = ({result}) => {
  return (
    <div className="ui cards">
      {result !== '' ? result.results.map((r, index) => <div key={index} className="card"><CreatorCard creator={r} /></div>) : ""}
    </div>
  )
}

export default CreatorList;
