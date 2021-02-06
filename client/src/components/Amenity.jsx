import React from 'react';

const Amenity = (props) => {
  const amenity = props.data;
  return (
    <div id={amenity.name} className="amenity-box">
      <div key={`name ${amenity.name}`} className="amenity-name">{amenity.name}</div>
      <img key={`img ${amenity.img}`} src={`./images/${amenity.img}.png`}/>
    </div>
  )
}

export default Amenity;