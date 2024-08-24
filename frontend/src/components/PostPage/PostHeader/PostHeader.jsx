import React from 'react'
import './PostHeader.css'

const PostHeader = ({id,namee,owner,profilepic,image}) => {
  return (
    <div className="header-container">
           
      <div className="meta-info"> 
        <img src={profilepic} alt='' />
        <p>&nbsp;{owner}</p> 
        <button className='follow-button' type="button">Follow</button>    
      </div> 

      <h1 className="title">{namee}</h1>     

    </div>
  )
}

export default PostHeader
