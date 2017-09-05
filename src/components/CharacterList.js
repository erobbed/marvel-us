import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterList = ({result}) => (
  <div className="ui cards">
    {result !== '' ? result.results.map((r, index) => <div className="card" key={index}><CharacterCard character={r}/></div>) : ""}
  </div>
)


export default CharacterList;
