import React from 'react';
import Character from './Character'

const CharacterList = ({result}) => (
  <div className="ui cards">
    {result !== '' ? result.results.map((r, index) => <div className="card" key={index}><Character character={r}/></div>) : ""}
  </div>
)


export default CharacterList;
