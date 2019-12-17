import React from 'react'
import meatlovers from '../images/meatlovers.jpeg'
import glutenfree from '../images/glutenfree.jpeg'
import veggiefriendly from '../images/veggieFriendly.jpeg'
import allRecipes from '../images/allrecipes.jpeg'
import giveUsATry from '../images/GiveUsaTryGroup.png'
import becomeMember from '../images/becomememberdesktop.jpeg'
import Figure from 'react-bootstrap/Figure'



const FiguresOne = () => {
    return (
        <div className='figures'>
            <Figure className='card left'>
                <Figure.Image className='card-img'
                    width={171}
                 
                    height={180}
                    alt="meatlovers"
                    src={meatlovers}
                />
                <Figure.Caption className='card-text'>
                   Meat Lovers
  </Figure.Caption>
  </Figure>
  <Figure className='card left'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="glutenfree"
                    src={glutenfree}
                />
                <Figure.Caption className='card-text'>
                    Gluten Free
  </Figure.Caption>
  </Figure>
  <Figure className='card right'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="veggiefriendly"
                    src={veggiefriendly}
                />
                <Figure.Caption className='card-text'>
                    Veggie Friendly
  </Figure.Caption>
  </Figure>
  <Figure className='card left'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="allrecipes"
                    src={allRecipes}
                />
                <Figure.Caption className='card-text'>
                    All Recipes
  </Figure.Caption>
  </Figure>
        </div>
    )

}

export default FiguresOne