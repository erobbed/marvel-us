import React from 'react'

const Creator = ({creator}) => {
  return (
    <div className="header">
      {console.log(creator)}
      <h4>{creator.fullName.toUpperCase()}</h4>
      <div className="image">
        <img src={`${creator.thumbnail.path}.jpg`} height="250" width="200" alt="default"/>
      </div>
    </div>
  )
}

export default Creator
