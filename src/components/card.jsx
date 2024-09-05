import React from 'react'

function Card({ title, content, imageUrl }) {
  return (
    <div className="card">
      <div className="featured-tag"><h6 style={{color:"black",backgroundColor:"orange"}}>Featured</h6></div>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>

  )
}
export default Card;
