import React from 'react';
import "./hero.css";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import hero1 from '../../../assets/hero-img-1.png';
import hero2 from '../../../assets/hero-img-2.png';
import hero3 from '../../../assets/hero-img-3.png';
import hero4 from '../../../assets/hero-img-4.png';

export default function Hero() {

    const fadeImages = [hero1, hero2, hero3, hero4];

    const properties = {
      // duration: 5000,
      // transitionDuration: 500,
      // infinite: true,
      // indicators: true,
      arrows: false,
      pauseOnHover: false,
    }

    return (
        <div className="slide-container">
          <Fade {...properties}>
            <div className="each-fade">
              <div className="image-container">
                <img className="hero-container-new" src={fadeImages[0]} alt=""/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="hero-container-new" src={fadeImages[1]} alt=""/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="hero-container-new" src={fadeImages[2]} alt=""/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="hero-container-new" src={fadeImages[3]} alt=""/>
              </div>
            </div>
          </Fade>
        </div>



        // <div className="hero-wrapper">
        //     <div className="hero-container-new hero-img-1"></div>
        //     <div className="hero-container-new hero-img-2"></div>
        //     <div className="hero-container-new hero-img-3"></div>
        //     <div className="hero-container-new hero-img-4"></div>
        // </div>
        )
}
