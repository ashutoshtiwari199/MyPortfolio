import { themeContext } from '../../Context'
import { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">

    {/* Left */}
        <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi  
          <br />
          corrupti porro amet possimus officiis quod.
        </span>

        <a href="./Ashutosh.pdf" download={true} >
          <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}} ></div>
        </div>

    {/* right */}
        <div className="cards">
          <div style={{left: '14rem'}} >
            <Card
              emoji={HeartEmoji}
              heading="Design"
              detail="FIgma, Sketch, PhotoShop, AdobeXD, Adobe"
            />
          </div>
          <div style={{left: '-4rem', top:'12rem'}} >
            <Card
              emoji={Glasses}
              heading="Developer"
              detail="React, NodeJs, MongoDB, ExpressJs"
            />
          </div>
          <div style={{left: '16rem', top:'19rem',  }} >
            <Card
              emoji={Humble}
              heading="UI/UX"
              detail="Minimalism is the new era of design"
            />
          </div>
          <div className="blur s-blur2" style={{background: 'var(--purple)'}} ></div>
        </div>
    </div>
  )
}

export default Services