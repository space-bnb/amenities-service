import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      <div id="amenity-container">
        {this.state.amenities.map(amenity => <Amenity key={`item ${amenity.name}`} data={amenity}/>)}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('amenities'))