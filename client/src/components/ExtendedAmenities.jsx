import React from 'react';
import AmenityWindow from './AmenityWindow.jsx';

class ExtendedAmenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  setShow() {
    let show = !this.state.show;
    this.setState({ show });
  }

  render() {
    <div>
      <a href="javascript:void(0)" onClick={this.setShow.bind(this)}>View all amenities</a>
      <AmenityWindow show={this.state.show}/>
    </div>
  }

}

export default ExtendedAmenities;