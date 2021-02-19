import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.scss';
require.context('./assets/icons/', true)

import App from './components/App.jsx'

ReactDOM.render(<App />, document.getElementById('amenities'))