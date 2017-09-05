import React from 'react'
import { Link } from 'react-router-dom'


const CharacterCard = ({character}) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="header">
        <h2 className="name">{character.name.toUpperCase()}</h2>
        <div className="image">
          <img src={`${character.thumbnail.path}.jpg`} height="250" width="200" alt="default"/>
        </div>
      </div>
    </Link>
  )
}

export default CharacterCard

