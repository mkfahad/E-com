import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Products from './Products.json'
import {Link} from 'react-router-dom'

function Section() {
  return (
    <div>
      {Products.Products.map(item => (
         <Row>
          <Link to={`/Productdetails/${item.id}`}>
            <Card>
            <div tabIndex={0} className='flex justify-center cursor-pointer'>
                    <img src={item.photograph1} className="w-[640px]"/>
                </div>
              <Card.Body  >
                <Card.Title>Product-Name:</Card.Title>
                <Card.Text tabIndex={0} className='cursor-pointer'> 
                  {item.name}
                </Card.Text>
                <Card.Title> Price:</Card.Title>
                <Card.Text tabIndex={0}>
                  {item.Price}
                </Card.Text>
              </Card.Body>
            </Card>
            </Link>
            </Row>
          

      ))}

    </div>
  )
}

export default Section

