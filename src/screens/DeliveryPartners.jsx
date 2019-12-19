import React from 'react'
import costco from '../images/costco.png'
import Keyfood from '../images/Keyfood.png'
import weis from '../images/weis.png'
import wholefoods from '../images/wholefoods.png'
import stopnshop from '../images/stopnshop.png'
import '../styles/delivery.css'

const DeliveryPartners = () => {
    return (
        <div className='responsiveDelivery'>
            <h3 className='deliveryTitle'>DELIVERY PARTNERS</h3>
            <img
                className="responsiveImg"
                src={wholefoods}
                alt="wholefoods logo"
            />
            <img
                className="responsiveImg"
                src={stopnshop}
                alt="stop and shop logo"
            />

            <img
                className="responsiveImg"
                src={costco}
                alt="costco logo"
            />

            <img
                className="responsiveImg"
                src={weis}
                alt="weis logo"
            />

            <img
                className="responsiveImg"
                src={Keyfood}
                alt="keyfoods logo"
            />

            <hr className='carouselDivider' />

        </div>
    )
}

export default DeliveryPartners