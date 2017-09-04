import React from 'react'

const Character = ({character}) => {
  return (
    <div className="header">
      {console.log(character)}
      <h4>{character.name}</h4>
    </div>
  )
}

export default Character
