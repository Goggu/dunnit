import React from 'react'
import './PostHeader.css'

const PostHeader = ({id,namee,owner,profilepic}) => {
  return (
    <div className="header-container">
           
      <h1 className="title">{namee}</h1>     

      <div className="meta-info"> 
        <p>{owner}</p>        
        <p className='pipe'> | </p>
        <p>Buisness</p>
      </div>
      
    </div>
  )
}

export default PostHeader
