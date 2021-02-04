import React from 'react';

const Amenity = (props) => {
  const amenity = props.data;
  return (
    <div id={amenity.name}>
      <div key={`name ${amenity.name}`}>{amenity.name}</div>
      <div key={`desc ${amenity.name}`}>{amenity.description}</div>
      <div key={`img ${amenity.name}`}>{amenity.img}</div>
    </div>
  )
}

export default Amenity;