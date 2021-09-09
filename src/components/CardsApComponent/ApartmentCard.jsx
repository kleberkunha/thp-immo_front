import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ApartmentCard = ({listing}) => {
  const history = useHistory();

  function truncate (str) {
    return str.length > 10 ? str.substring(0, 50) + "..." : str;

}

  return (
    <>
      <div className="mx-4" onClick={() => history.push(`/listing/${listing.id}`)}>
        <div class="row">
          <div class="card h-100" style={{width: "18rem"}}>
            <img class="card-img-top" src={listing.photo} alt="annonce illustrée"/>
            <div class="card-body">
              <h5 class="card-title">{listing.title}</h5>
              <p class="card-text">€ {listing.price}</p>
            </div>
            <Link class="btn btn-primary stretched-link" onClick={() => history.push(`/listing/${listing.id}`)} href="">Je fonce</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentCard;