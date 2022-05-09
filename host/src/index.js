import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loading from './views/loading/loading';
import './index.less'

const Contact_mfe = React.lazy(() => import('contact/Contact'));
const About_mfe = React.lazy(() => import('about/About'));
const Home_mfe = React.lazy(() => import('home/Home'));

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
            <Route path="/contact" element={
              <Suspense fallback={<Loading />}>
                <Contact_mfe />
              </Suspense>} />
            <Route path="/about" element={
              <Suspense fallback={<Loading />}>
                <About_mfe />
              </Suspense>} />
            <Route path="/" element={
              <Suspense fallback={<Loading />}>
                <Home_mfe companyName={"Dummy Company"}/>
              </Suspense>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));