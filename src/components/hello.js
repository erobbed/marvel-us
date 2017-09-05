import React from 'react'



const Hello = (props) => {
  console.log('hello', props);
  return (
<h1 className='thing'>Hello world{props.match.params.character_id}</h1>
  )
}

export default Hello
