import React from 'react'

const CreatorCard = ({creator}) => {
  return (
    <div className="header">
      {console.log(creator)}
      <h2 className="name">{creator.fullName.toUpperCase()}</h2>
      <div className="image">
        <img src={`${creator.thumbnail.path}.jpg`} height="250" width="200" alt="default"/>
      </div>
    </div>
  )
}

export default CreatorCard
