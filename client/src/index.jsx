import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <div>
        TESTING STUFF IN HERE!
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))