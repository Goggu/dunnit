import React from 'react'
import './Eachitem.css'

const Eachitem = ({id,image,namee,owner}) => {
  return (
    <div className='each-item'>
      <div className='each-item-info'>
        <div>
          <p className='post-title'>{namee}</p>
        </div>
        <div>
          <p className='post-owner'>{owner}</p>
        </div>                
      </div>
      <div className='each-item-img-container'>
        <img className='each-item-image' src={image} alt='' />
      </div>
      
    </div>
  )
}

export default Eachitem
