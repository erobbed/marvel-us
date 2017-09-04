import React from 'react';
import Creator from './Creator'

const CreatorList = ({result}) => {
  return (
    <div className="ui cards">
      {result !== '' ? result.results.map((result, index) => <div key={index} className="card"><Creator/></div>) : ""}
    </div>
  )
}

export default CreatorList;
