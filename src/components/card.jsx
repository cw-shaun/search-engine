import React from 'react'
import './card.css'

const noimageurl="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg";
function Card({ title, year,imageUrl,km,price }) {
  return (
    <div className="card">
      {
      imageUrl &&
      <div className="featured-tag"><h6 style={{
        float:"left",
        backgroundColor: "orange",
        margin:"10px 10px",
        position:"absolute",
        borderRadius:"4px",
        paddingLeft:"4px",
        paddingRight:"4px",
        fontSize:"10px"
      }}>FEATURED</h6></div>}
      {<img src={imageUrl?imageUrl:noimageurl} onError={ () => this.img.src = noimageurl} alt={title} className="card-image" />}
      <div className="card-content">
        <p className="card-title">2012, Maruti Suzuki Wagon R 1.0 LXi</p>
        <p className="card-text">Rs. {price}</p>
        <p style={{color:"black"}}>Year: {year}  Km: {km}</p>
      </div>
    </div>

  )
}
export default Card;
