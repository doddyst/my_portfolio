import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
     <section className='qualification section'>
      <h2 className='section_title'>Qualification</h2>
      <span className='section_subtitle'>My Life Journey</span>
      <div className='qualification_container container'>
      <div className='qualification_tabs'>
        <div className='qualification_button qualification_active button--flex'>
        <i class="uil uil-graduation-cap"></i>{""}
        Education
        </div>
        <div className='qualification_button qualification_active button--flex'>
        <i class="uil uil-briefcase-alt"></i>{""}
        Experience
        </div>
      </div>

      <div className='qualification_Section'>
        <div className='qualification_content'>
          <div className='qualification_data'>
           <div>
             <h3 className='qualification_title'>FrontEnd Dev</h3>
             <span className='qualification_subtitle'>ITB STIKOM</span>
             <div className='qualification_calendar'>
                <i class="uil uil-calendar-alt"></i>2017 - 2023
             </div>
            </div>
          
          <div>
            <span className='qualification_rounder'></span>
            <span className='qualification_line'></span>
          </div>
         </div>

         <div className='qualification_data'>
              <div></div>

             <div>
               <span className='qualification_rounder'></span>
               <span className='qualification_line'></span>
            </div>

           <div>
             <h3 className='qualification_title'>Web Developer</h3>
             <span className='qualification_subtitle'>ITB STIKOM</span>
             <div className='qualification_calendar'>
                <i class="uil uil-calendar-alt"></i>2017 - 2023
             </div>
            </div>
         </div>
        </div>
       </div>
      </div>
     </section>
  )
}

export default Qualification
