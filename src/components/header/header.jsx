import React, {useState} from 'react';
import "./header.css";

const Header = () => {
    //-------------toggle menu------------------- 
    const [Toggle, showMenu] = useState(false);

  return (
   <header className='header'>
    <nav className='nav container'>
        <a href="index.html" className='nav_logo'>Folio<b>.</b></a>
    
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className='nav_list grid'>
                <li className='nav_item'>
                <a href="#home" className='nav_link active_link'>
                    <i className='uil uil-estate nav_icon'></i>HOME
                </a>
                </li>
                
                <li className='nav_item'>
                <a href="#about" className='nav_link'>
                    <i className='uil uil-user nav_icon'></i>ABOUT
                </a>
                </li>

                <li className='nav_item'>
                <a href="#skills" className='nav_link'>
                    <i className='uil uil-file-alt nav_icon'></i>SKILLS
                </a>
                </li>

                {/* <li className='nav_item'>
                <a href="#qualification" className='nav_link'>
                    <i class="uil uil-graduation-cap nav_icon"></i>QUALIFICATION
                </a>
                </li> */}

                <li className='nav_item'>
                <a href="#portfolio" className='nav_link'>
                    <i className='uil uil-scenery nav_icon'></i>PORTFOLIO
                </a>
                </li>

                <li className='nav_item'>
                <a href="#contact" className='nav_link'>
                    <i className='uil uil-message nav_icon'></i>CONTACT
                </a>
                </li>
            </ul>

            <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
            </div>   

            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i></div> 
    </nav>
   </header>
  )
}

export default Header
