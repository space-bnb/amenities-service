import React from 'react';

const Amenity = (props) => {
  const amenity = props.data;
  return (
    <div id={amenity.name} className="amenity-box">
      <div key={`name ${amenity.name}`} className="amenity-name">{amenity.name}</div>
      <div key={`img ${amenity.name}`} className="amenity-img">{amenity.img}</div>
    </div>
  )
}

export default Amenity;