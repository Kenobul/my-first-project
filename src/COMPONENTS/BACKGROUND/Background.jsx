import React from 'react'
import './Background.css';
import image_1 from '../../ASSETS/image1.png'
import image_2 from '../../ASSETS/image2.png'
import image_3 from '../../ASSETS/image3.png'
import video_mp4 from '../../ASSETS/video1.mp4'
const Background = ({heroCount,playStatus}) => {
    if (playStatus) {
        return <video className='background fade-in' autoPlay loop muted >
            <source  src={video_mp4} />
        </video>
    }
    else if (heroCount===0){
        return <img src={image_1} alt="first_image" className="background fade-in" />
    }
    else if (heroCount===1){
        return <img src={image_2} alt="second_image" className="background fade-in" />
    }
    else if (heroCount===2){
        return <img src={image_3} alt="third_image" className="background fade-in" />
    }
}

export default Background