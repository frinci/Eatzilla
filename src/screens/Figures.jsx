import React from 'react'
import meatlovers from '../images/meatlovers.jpeg'
import glutenfree from '../images/glutenfree.jpeg'
import veggiefriendly from '../images/veggieFriendly.jpeg'
import allRecipes from '../images/allrecipes.jpeg'
import giveUsATry from '../images/GiveUsaTryGroup.png'
import becomeMember from '../images/becomememberdesktop.jpeg'
import Figure from 'react-bootstrap/Figure'

import Card from 'react-bootstrap/Card'



const Figures = () => {
    return (
//         <Card style={{ width: '18rem' }}>
//   <Card.Body style={{ background: url({giveUsATry})}}>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="meatlovers"
                src={meatlovers}
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
  <Figure.Image className='figureImage'
                width={171}
                height={180}
                alt="glutenfree"
                src={glutenfree}
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
  <Figure.Image className='figureImage'
                width={171}
                height={180}
                alt="veggiefriendly"
                src={veggiefriendly}
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
  <Figure.Image className='figureImage'
                width={171}
                height={180}
                alt="allrecipes"
                src={allRecipes}
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
  <Figure.Image className='figureImage'
                width={171}
                height={180}
                alt="giveUsATry"
                src={giveUsATry}
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
  <Figure.Image className='figureImage'
                width={171}
                height={180}
                alt="becomeMember"
                src={becomeMember}
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
        </Figure>

    )

}

export default Figures