import React from 'react';
import './LogoAndHeadline.css'
import LogoSVG from '../../../assets/red_circle.svg'

const LogoAndHeadline = () => {
    return (
        <div className='abcd'>
            <div className='heading-logo'>
                Start creating music for new blockchain era
            </div>
            <div className='heading-logo-master-container'>
                <div className='grey-background'></div>
                <div className='heading-logo-container'>
                    <div className='heading-logo-2'>
                        <div >Become a</div>
                        <div >part of</div>
                    </div>
                    <img className='image-logo' src={LogoSVG} alt="musomatic logo"></img>
                    <div className='heading-logo-2'>
                        <div >New Crypto</div>
                        <div >World</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogoAndHeadline;