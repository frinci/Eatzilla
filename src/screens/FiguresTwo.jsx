import React from 'react'
import meatlovers from '../images/meatlovers.jpeg'
import glutenfree from '../images/glutenfree.jpeg'
import veggiefriendly from '../images/veggieFriendly.jpeg'
import allRecipes from '../images/allrecipes.jpeg'
import giveUsATry from '../images/GiveUsaTryGroup.png'
import becomeMember from '../images/becomememberdesktop.jpeg'
import Figure from 'react-bootstrap/Figure'



const Figures = () => {
    return (
        <div className='figures'>
  <Figure className='card try'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="giveUsATry"
                    src={giveUsATry}
                />
                <Figure.Caption className='card-text'>
                    GIVE US A TRY NOW!
  </Figure.Caption>
  <div className='card-info trying'>
                    Get a first order free on us with $40 to spend and see how our service works in your area
  </div>
  </Figure>
  <Figure className='card member'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="becomeMember"
                    src={becomeMember}
                />
                <Figure.Caption className='card-text'>
                    BECOME A MEMBER
  </Figure.Caption>
  <div className='card-info members'>
                    Becoming a member saves you 15% on your orders your first 6 months with us and no membership fee for 6 months
  </div>
            </Figure>
        </div>
    )

}

export default Figures