import React from 'react';
import { Link } from "react-router-dom";
import {Card, Row, Col} from 'react-bootstrap'
import Rating from "../components/Rating";
import './css/AllSitters.css'
const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}


function AllSitter({sitter}) {
 console.log('this is s', sitter);
  return(
       <div className='allsitter'>
             <Card className="my-3 p-3 rounded">
                 <Link to={`/sitterlisting/${sitter.id}`}>
        {/* render product name and image */}
        <Card.Img className='sitterimages' src={sitter.image}/>
      </Link>

    
      <Card.Body>
        <Link to={`/sitterlisting/${sitter.id}`} style={linkStyle}>
          <Card.Title as="div">
            <h5>{sitter.city}<br></br> {sitter.zipcode}</h5>
          </Card.Title> 
        </Link>

        <Card.Text as="div">
          <div className="my-3">
           
            {sitter.rating} ({sitter.numReviews} reviews)
            {/* render product props rating and number of reviews */}
            {/* props sent to Rating component  */}
            {/* render Rating component here */}
            <Rating
              value={sitter.rating}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h5">${sitter.price}</Card.Text>
        </Card.Body>
          </Card>
          </div>
           )
        }



export default AllSitter;
