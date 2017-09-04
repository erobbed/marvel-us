import React from 'react'

const Comic = ({comic}) => {
  return (
    <div className="header">
      {console.log(comic)}
      <h2 className="name">{comic.title.toUpperCase()}</h2>
      <div className="image">
        <img src={`${comic.thumbnail.path}.jpg`} height="250" width="200" alt="default"/>
      </div>
    </div>
  )
}

export default Comic
