import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/home/home';
import Contact from './views/contact/contact';
import About from './views/about/about';
import './index.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: "home"
    };
  }

  handleMenuClick = selectedMenu => {
   this.setState({ menuSelected: selectedMenu }); 
  }

  render() {
    return (
      <Router>
        <div className="header">
          <Link className="logo" to="/">CompanyLogo</Link>
          <div className="header-right">
            <Link
              className={this.state.menuSelected === "home" ? "active": ""}
              onClick={() => this.handleMenuClick("home")}
              to="/">Home</Link>
            <Link className={this.state.menuSelected === "contact" ? "active": ""}
              onClick={() => this.handleMenuClick("contact")}
              to="/contact">Contact</Link>
            <Link className={this.state.menuSelected === "about" ? "active": ""}
              onClick={() => this.handleMenuClick("about")}
              to="/about">About</Link>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home companyName="Dummy Company"/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));