import React from 'react';

const Amenity = (props) => {
  const amenity = props.data;
  return (
    <div id={amenity.name} className="amenity-box">
      <img key={`img ${amenity.img}`} className="amenity-img" src={`./images/${amenity.img}.png`}/>
      <div key={`name ${amenity.name}`} className="amenity-name">{amenity.name}</div>
    </div>
  )
}

export default Amenity;