import React from 'react';
import ReactDOM from 'react-dom';
import About from './views/about/about'

class App extends React.Component {
  render() {
    return (
      <About />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));