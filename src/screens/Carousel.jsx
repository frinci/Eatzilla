import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import costco from '../images/costco.png'
import Keyfood from '../images/Keyfood.png'
import weis from '../images/weis.png'
import wholefoods from '../images/wholefoods.png'
import stopnshop from '../images/stopnshop.png'
import eatZillaLogo from '../images/eatZillaLogo.png'

const CarouselContainer = () => {
  return (

    <div className='deliveryPartners'>
      <Carousel style={{ height: '150px' }}>
        <h3 className='deliveryTitle'>DELIVERY PARTNERS</h3>
        <Carousel.Item className='caroselItem'>
          <img
            className="caroselImg"
            src={stopnshop}
            alt="stop and shop logo"
          />
        </Carousel.Item>

        <Carousel.Item className='caroselItem'>
          <img
            className="caroselImg"
            src={costco}
            alt="costco logo"
          />
        </Carousel.Item>

        <Carousel.Item className='caroselItem'>
          <img
            className="caroselImg"
            src={Keyfood}
            alt="keyfoods logo"
          />
        </Carousel.Item>

        <Carousel.Item className='caroselItem'>
          <img
            className="caroselImg"
            src={weis}
            alt="weis logo"
          />
        </Carousel.Item>

        <Carousel.Item className='caroselItem'>
          <img
            className="caroselImg"
            src={wholefoods}
            alt="wholefoods logo"
          />
        </Carousel.Item>

      </Carousel>

      <hr className='carouselDivider' />

      <img
        className="carouselEatZillalogo"
        src={eatZillaLogo}
        alt="eatZilla logo"
      />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <h2 className='phoneNumber'>Call us at 1-555-EatZilla</h2>

    </div>
  )
}


export default CarouselContainer