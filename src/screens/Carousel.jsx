import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import costco from '../images/costco.png'
import Keyfood from '../images/Keyfood.png'
import weis from '../images/weis.png'
import wholefoods from '../images/wholefoods.png'
// import '../scss/custom.scss'

const CarouselContainer = () => {
  return (

    <div className='deliveryPartners'>
      <Carousel>
        <h3 className='deliveryTitle'>Delivery Partners</h3>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={costco}
            alt="costco logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Keyfood}
            alt="keyfoods logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={weis}
            alt="weis logo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wholefoods}
            alt="wholefoods logo"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  )
}


export default CarouselContainer