import React from 'react';
import Card from 'react-bootstrap/Card'

const ApartmentCard = ({listing}) => {

  function truncate (str) {
    return str.length > 10 ? str.substring(0, 50) + "..." : str;
}

  return (
    <div className="mx-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={listing.photo} />
        <Card.Body>
          <Card.Title>{listing.title}</Card.Title>
          <Card.Text>{listing.price} €/semaine</Card.Text>
          <Card.Text>
            {truncate(listing.description)}
          </Card.Text>
          <Card.Text>
            {listing.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApartmentCard;