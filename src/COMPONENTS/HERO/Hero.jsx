import React from 'react'
import './Hero.css'
import pause_icon from '../../ASSETS/pause_icon.png'
import play_icon from '../../ASSETS/play_icon.png'
import arrow_btn from '../../ASSETS/arrow_btn.png'
const Hero = ({heroCount,heroData,playStatus,setPlaystatus,setHeroCount}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
         <p>Explore Features</p> 
         <img className='arrow-btn' src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
          <div className="hero-dots">
                <ul className="hero-list-dots">
                  <li onClick ={() => setHeroCount(0)} className={heroCount===0? 'hero-dot orange':'hero-dot'}></li>
                  <li onClick ={() => setHeroCount(1)} className={heroCount===1? 'hero-dot orange':'hero-dot'}></li>
                  <li onClick ={() => setHeroCount(2)} className={heroCount===2? 'hero-dot orange':'hero-dot'}></li>
                </ul>
          </div>
          <div className='hero-play'>
              <img onClick={() => setPlaystatus(!playStatus)} src={playStatus ? pause_icon:play_icon} alt="" />
              <p>See the video</p>
          </div>
        </div>
    </div>
  )
}

export default Hero