import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/home';

class App extends React.Component {
  render() {
    return (
      <Home companyName="Checkmarx"/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));