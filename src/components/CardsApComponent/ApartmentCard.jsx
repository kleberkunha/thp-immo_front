import React from 'react';
import Card from 'react-bootstrap/Card'

const ApartmentCard = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.theculturetrip.com/wp-content/uploads/2016/01/799px-Typical_Paris_Apartment1.jpg" />
        <Card.Body>
          <Card.Title>$ 500.000</Card.Title>
          <Card.Text>115 m², 1522 EUR/m²</Card.Text>
          <Card.Text>
            Floor of a T3 villa in a gated community in the urbanization ...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApartmentCard;