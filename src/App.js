import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Testimonials from './components/testimonials';
import Contact from './components/contact';

import { useState } from 'react';

function App() {
  const menuItems = ["Home", "About", "Menu", "Contact", "Testimonials"]
  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  }
  // Component mapping
  const components = {
    Home: <Home />,
    About: <About/>,
    Menu : <Products />,
    Contact: <Contact />,
    Testimonials: <Testimonials/>
  };


  return (
    <div className="App">
      <Header menuItems={menuItems} activeMenuItem={activeMenuItem} onMenuItemClick={handleMenuItemClick} />
      <div className="container">
      {components[activeMenuItem]}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
