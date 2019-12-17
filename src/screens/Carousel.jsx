import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import costco from '../images/costco.png'
import Keyfood from '../images/Keyfood.png'
import weis from '../images/weis.png'
import wholefoods from '../images/wholefoods.png'
import stopnshop from '../images/stopnshop.png'

const CarouselContainer = () => {
  return (

    <div className='deliveryPartners'>
      <Carousel>
        <h3 className='deliveryTitle'>DELIVERY PARTNERS</h3>
        <Carousel.Item>
          <img
            className="caroselImg"
            src={stopnshop}
            alt="stop and shop logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caroselImg"
            src={costco}
            alt="costco logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caroselImg"
            src={Keyfood}
            alt="keyfoods logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caroselImg"
            src={weis}
            alt="weis logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caroselImg"
            src={wholefoods}
            alt="wholefoods logo"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  )
}


export default CarouselContainer