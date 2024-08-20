
import React from 'react'
import './Eachitem.css'

const Eachitem = ({id,image,namee,owner,profilepic}) => {
  return (
    <div className='each-item'>      
      <div>
        <p className='post-title'>{namee}</p>
      </div>                      
      <div className='each-item-img-container'>
        <img className='each-item-image' src={image} alt='' />
      </div>      
      <div className='profile-info'>
        <img className='profile-pic' src={profilepic} alt='' />
        <p className='profile-name'>{owner}</p>
      </div>
    </div>
  )
}

export default Eachitem
