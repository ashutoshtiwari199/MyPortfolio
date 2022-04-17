import Navbar from "./Component/Navbar/Navbar";

import './App.css'
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Works/Works";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonials from "./Component/Testimonial/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import { useContext } from "react";
import {themeContext} from './Context';

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"    
    style={{
        transition: '1s ease all',
        background: darkMode? 'rgb(21, 28, 34)' : "",
        color: darkMode? 'white' : ''
      }}
>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
