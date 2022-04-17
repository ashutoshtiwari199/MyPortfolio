import {useContext} from 'react'
import './Floatingdiv.css'
import { themeContext } from '../../Context'


const Floatingdiv = ({image, text1, text2}) => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="floatingdiv" 
    style={{
        transition: '1s ease all',
        background: darkMode? 'rgb(41, 48, 54)' : "",
        color: darkMode? 'white' : ''
      }}
    >
        <img src={image} alt="" />
        <span>
            {text1}<br />
            {text2}
        </span>
    </div>
  )
}

export default Floatingdiv