import React from 'react'
import "./skills.css"
import HTMLIMG from "../../assets/image/html-icon.png"
import CSSIMG from "../../assets/image/css-icon.png"
import JSIMG from "../../assets/image/javascript_icon.png"
import REACTIMG from "../../assets/image/react_icon.png"
import GITIMG from"../../assets/image/git-icon.png"

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>My Technical Skills</span>
        <div className='container'>
            <div className='row' id='skillcontainer'>
                <div className='bar'>
                    <div className='info'>
                        <img src={HTMLIMG} alt="" />
                        <span>HTML</span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <img src={CSSIMG} alt="" />
                        <span>CSS</span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <img src={JSIMG} alt="" />
                        <span>Javascript</span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <img src={REACTIMG} alt="" />
                        <span>React</span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <img src={GITIMG} alt="" />
                        <span>GIT</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
