import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.scss';

import Amenity from './components/Amenity.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amenities: [] }
  }

  componentDidMount() {
    this.get(1);
  }

  async get(id) {
    const { data } = await axios.get(`/amenities-api/amenity/${id}`)
    this.setState({ amenities: data.amenities })
  }

  render() {
    console.log(this.state.amenities)
    return (
      <div id="amenity-full">
        <h2 id="amenity-title">Amenities</h2>
        <h4 id="amenity-subtitle">Updated with your health and safety in mind</h4>
        <div id="amenity-container" className="amenity-container">
          {this.state.amenities.map(amenity => <Amenity key={`item ${amenity.name}`} data={amenity}/>)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('amenities'))