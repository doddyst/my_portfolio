import React from 'react'
import './work.css'
import Works from './works'

const Work = () => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section_title'>Portfolio</h2>
      <span className='section_subtitle'>My Most Recent Works</span>
    <Works/>
    </section>
  )
}

export default Work
