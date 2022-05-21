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
                    <Link spy={true} to='Navbar' smooth={true} className="nav-items" >
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to="Services" smooth={true} className="nav-items">
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} className="nav-items">
                        <li>Experience</li>
                    </Link>

                    {/* <Link spy={true} to='Portfolio' smooth={true} className="nav-items">
                        <li>Portfolio</li>
                    </Link> */}
                    <Link spy={true} to='Testimonials' smooth={true} className="nav-items">
                        <li>Testimonials</li>
                    </Link>
                    </ul>
                    <Link spy={true} to="contact-us" smooth={true} className="nav-items">
                     <button className="button " >
                        Contact Me
                     </button>
                    </Link>

                </div>
            </div>
        </div>    
    )
}

export default Navbar