import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Element } from 'react-scroll';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import WhenInView from './components/Helper/WhenInView';
// import About from './components/About/About';
// import Portfolio from './components/Portfolio/Portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
// import ContactUs from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

import './App.css';
import './shared/css/media-queries.css';
import './shared/css/animate.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      routes: [this.headerRef, this.resumeRef],
      currentRoute: 0,
    };
  }

  onNavigation = i => {
    const ref = this.state.routes[i];
    ReactDOM.findDOMNode(ref.current).scrollIntoView({
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />

        <Element name='home'>
          <Header ref={this.headerRef} onNav={this.onNavigation} />
        </Element>
        <Element name='resume'>
          <Resume />
        </Element>

        {/* <About />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
