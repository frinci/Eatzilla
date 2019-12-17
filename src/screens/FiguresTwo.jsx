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
  <Figure className='card right'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="giveUsATry"
                    src={giveUsATry}
                />
                <Figure.Caption className='card-text'>
                    Give Us A Try
  </Figure.Caption>
  </Figure>
  <Figure className='card left'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="becomeMember"
                    src={becomeMember}
                />
                <Figure.Caption className='card-text'>
                    Become a Member
  </Figure.Caption>
            </Figure>
        </div>
    )

}

export default Figures