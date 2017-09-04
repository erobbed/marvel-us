import React from 'react'

const Comic = ({comic}) => {
  return (
    <div className="header">
      {console.log(comic)}
      <h4>{comic.title.toUpperCase()}</h4>
      <div className="image">
        <img src={`${comic.thumbnail.path}.jpg`} height="250" width="200" alt="default"/>
      </div>
    </div>
  )
}

export default Comic
