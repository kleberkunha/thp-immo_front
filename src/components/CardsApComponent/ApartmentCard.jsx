import React from 'react';
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom';

const ApartmentCard = ({listing}) => {
  const history = useHistory();

  function truncate (str) {
    return str.length > 10 ? str.substring(0, 50) + "..." : str;
}

  return (
    <div className="mx-3" onClick={() => history.push(`/listing/${listing.id}`)}>
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
        <a class="btn btn-primary stretched-link" onClick={() => history.push(`/listing/${listing.id}`)}>Je fonce</a>
      </Card>
    </div>
  );
};

export default ApartmentCard;