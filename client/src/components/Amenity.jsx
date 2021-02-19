import React from 'react';

const Amenity = (props) => {
  const amenity = props.data;
  const img = props.img;
  return (
    <div id={amenity.name} className="amenity-box">
      <img
        key={`img ${amenity.name}`}
        className="amenity-img"
        src={img}
      />
      <div key={`name ${amenity.name}`} className="amenity-name">{amenity.name}</div>
    </div>
  )
}

export default Amenity;