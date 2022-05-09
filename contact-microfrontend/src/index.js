import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './views/contact/contact';

class App extends React.Component {
  render() {
    return (
      <Contact />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));