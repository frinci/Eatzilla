import React from 'react'
import meatlovers from '../images/meatlovers.jpeg'
import glutenfree from '../images/glutenfree.jpeg'
import veggiefriendly from '../images/veggieFriendly.jpeg'
import allRecipes from '../images/allrecipes.jpeg'
import giveUsATry from '../images/GiveUsaTryGroup.png'
import becomeMember from '../images/becomememberdesktop.jpeg'
import getToday from '../images/header.jpeg'
import Figure from 'react-bootstrap/Figure'



const FiguresOne = () => {
    return (
        <div className='figures'>

            <Figure className='card top'>
            <div className='transparentBox'>
                <h1 className='headerTitle'>GET IT TODAY</h1>
                <h3 className='headerSubtitle'>Fresh ingredients for your meals <br></br>delivered to you by 6PM, guaranteed!</h3>
            </div>
                <Figure.Image className='card-imgtop'
                    width={171}
                 
                    height={180}
                    alt="gettoday"
                    src={getToday}
                />

  </Figure>
  <Figure className='card left'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="allrecipes"
                    src={allRecipes}
                />
                <Figure.Caption className='card-text recipe'>
                    ALL RECIPES
  </Figure.Caption>
  <div className='card-info left recipes'>
                    All your recipes in one spot by category.
  </div>
  </Figure>
            <Figure className='card right'>
                <Figure.Image className='card-img'
                    width={171}
                 
                    height={180}
                    alt="meatlovers"
                    src={meatlovers}
                />
                <Figure.Caption className='card-text meat'>
                   MEAT LOVERS
  </Figure.Caption>
  <div className='card-info right meats'>
                    Chicken, beef, lamb, fish. We got it.
  </div>
  </Figure>
  <Figure className='card left'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="veggiefriendly"
                    src={veggiefriendly}
                />
                <Figure.Caption className='card-text'>
                    VEGGIE FRIENDLY
  </Figure.Caption>
  <div className='card-info left veggie'>
                    We got Vegetarian and Vegan recipes here.
  </div>
  </Figure>
  <Figure className='card right'>
                <Figure.Image className='card-img'
                    width={171}
                    height={180}
                    alt="glutenfree"
                    src={glutenfree}
                />
                <Figure.Caption className='card-text gluten'>
                    GLUTEN FREE
  </Figure.Caption>
  <div className='card-info right glutens'>
                    Recipes for those who can have gluten.
  </div>
  </Figure>
        </div>
    )

}

export default FiguresOne