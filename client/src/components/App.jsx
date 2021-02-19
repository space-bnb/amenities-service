import React from 'react';
import Amenity from './Amenity.jsx'
import axios from 'axios';

const preset = [{
  name: "Enhanced cleaning services",
  description: "Kogi quinoa succulents craft beer, DIY taxidermy copper mug chillwave",
  img: "clean"
},
{
  name: "Hands-free dispensers",
  description: "Iceland single-origin coffee gentrify tote bag venmo sriracha",
  img: "dispense"
},
{
  name: "Enhanced HVAC standards",
  description: "Slow-carb trust fund hella kogi, shaman locavore waistcoat green juice quinoa forage shabby chic franzen heirloom put a bird on it irony",
  img: "hvac"
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amenities: [] }
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    if (!isNaN(id)) { this.get(id) }
  }

  async get(id) {
    const { data } = await axios.get(`/amenities-api/amenity/${id}`);
    const amenities = preset.concat(data.amenities);
    this.setState({ amenities });
  }

  render() {
    return (
      <div id="amenity-full" className="main-container">
        <h2 id="amenity-title">Amenities</h2>
        <h4 id="amenity-subtitle">Updated with your health and safety in mind</h4>
        <div id="amenity-container" className="amenity-container">
          {this.state.amenities.map((amenity, index) => {
            const img = `https://amenities-service.s3-us-west-1.amazonaws.com/dist/images/${amenity.img}.png`;
             if (index < 8) {
              return (
              <Amenity
                key={`item ${amenity.name}`}
                data={amenity}
                img={img}
              />
              )}
          })}
        </div>
        <a href="#">View all amenities</a>
      </div>
    )
  }
}

export default App;