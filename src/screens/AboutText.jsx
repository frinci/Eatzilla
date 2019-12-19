import React from 'react'
import eatZillaLogo from '../images/eatZillaLogo.png'
import '../styles/delivery.css'

const AboutText = () => {
    return (
        <div className='aboutText'>
            <div className='aboutLogo'>
                <img
                    className="carouselEatZillalogo"
                    src={eatZillaLogo}
                    alt="eatZilla logo"
                />
            </div>

            <p className='loremParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            <p className='copyright'>Copyright © 2020 | All Rights Reserved</p>

            <h2 className='phoneNumber'>Call us at 1-555-EatZilla</h2>
        </div>
    )
}

export default AboutText 