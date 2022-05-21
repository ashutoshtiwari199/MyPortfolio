import React from 'react'

import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"


const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>Okayashutosh@gmail.com</span>
            <div className="f-icons">
            <a href="https://www.instagram.com/i_m__aashu/?hl=en" target="_blank">
                <Insta color='white' size={'3rem'} />
            </a>
            <a href="https://github.com/ashutoshtiwari199" target="_blank">
                <Github color='white' size={'3rem'} />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-tiwari-905b50122/" target="_blank">
                <Linkedin color='white' size={'3rem'}/>
            </a>
            </div>   
        </div>
    </div>
  )
}

export default Footer