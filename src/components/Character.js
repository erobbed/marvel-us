import React from 'react'



const Character = ({character}) => {
  return (
    <div className="header">
      {console.log(character)}
      <h4>{character.name}</h4>
      <div className="image">
        <img src={`${character.thumbnail.path}.jpg`} height="250" width="200" alt="default"/>
      </div>
    </div>
  )
}

export default Character
