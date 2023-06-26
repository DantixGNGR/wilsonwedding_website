import { React, useState } from 'react'
import './nav.css'
import {GoLocation} from 'react-icons/go'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {CiPhone} from 'react-icons/ci'
import {CiMail} from 'react-icons/ci'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  
  return (
    <nav>
      <div className='nav_top'>
      <div className='nav_top_left'>
        <div className='nav_top_component'>
        <GoLocation />
        <div className='top_text'>Oakhurst Farm Cottages, Wilderness</div>
        </div>
        <div className='nav_top_component'>
        <AiOutlineClockCircle />
        <div className='top_text'>9 May 2024, 15:00</div>
        </div>
      </div>
        <div className='nav_top_right'>
          <div className='nav_top_component'>
          <CiPhone />
          <div className='top_text'>+27 63 297 5383</div>
          </div>
          <div className='nav_top_component'>
          <CiMail />
          <div className='top_text'>gerhard.wilsone@gmail.com</div>
          </div> 
        </div>  
      </div>
      <div className='nav_bottom'>
        <div className='mg_text'>M&G</div>
        <div className='nav_banner'>
        <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' :'' }>Home</a>
      <a href='#ourStory' onClick={()=> setActiveNav('#ourStory')} className={activeNav === '#ourStory' ? 'active' :'' }>Our Story</a>
      <a href='#wedding' onClick={()=> setActiveNav('#wedding')} className={activeNav === '#wedding' ? 'active' :'' }>Wedding</a>
      <a href='#rsvp' onClick={()=> setActiveNav('#rsvp')} className={activeNav === '#rsvp' ? 'active' :'' }>RSVP</a>
      <a href='#gallery' onClick={()=> setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' :'' }>Gallery</a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :'' }>Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav