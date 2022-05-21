import Toggle from '../Toggle/Toggle'
import './navbar.css'
import { Link } from 'react-scroll';



const Navbar=()=>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Ashutosh</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                    <Link spy={true} to='Navbar' smooth={true}  >
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to="Services" smooth={true} >
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} >
                        <li>Experience</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true} >
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} >
                        <li>Testimonials</li>
                    </Link>
                    </ul>
                </div>
                <button className="button n-button" >
                    Contact Me
                </button>
            </div>
        </div>    
    )
}

export default Navbar