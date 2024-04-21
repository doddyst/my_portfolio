import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
        <i class="uil uil-award-alt about_icon"></i>
            <h3 className='about_title' >Experience</h3>
            <span className='about_subtitle'> Fresh Graduate</span>
        </div>

        <div className='about_box'>
        <i class="uil uil-briefcase-alt about_icon"></i>
            <h3 className='about_title' >Completed</h3>
            <span className='about_subtitle'> Few Project</span>
        </div>

        <div className='about_box'>
        <i class="uil uil-headphones about_icon"></i>
            <h3 className='about_title' >Contact</h3>
            <span className='about_subtitle'>Online 24/7</span>
        </div>
      
    </div>
  )
}

export default Info
