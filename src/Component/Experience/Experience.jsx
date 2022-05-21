import React from 'react'
import { themeContext } from '../../Context'
import { useContext } from 'react'


import './Experience.css'

const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="experience" id='Experience' >
        <div className="achievement" >
            <div className="circle" style={{ backgroundColor: darkMode? "rgb(50, 54, 61)": 'white'}} >2+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{ backgroundColor: darkMode? "rgb(50, 54, 61)": 'white'}}>17+</div>
            <span>Projects</span>
            <span>Delivered</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{ backgroundColor: darkMode? "rgb(50, 54, 61)": 'white'}}>3</div>
            <span>Satisfied</span>
            <span>Clients</span>
        </div>
    </div>
  )
}

export default Experience