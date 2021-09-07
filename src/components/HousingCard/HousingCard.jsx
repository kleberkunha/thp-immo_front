import { Link } from 'react-router-dom';

import React from 'react';

const HousingCard = () => {
  return (
    <div className="col-4 m-3 d-flex">
      <div className="">
        <img className="card-img-top card-img-sizing" src="https://images.pexels.com/photos/7174114/pexels-photo-7174114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title"> Belle maison de caractère </h5>
        <p className="card-text">Chatou</p>
        <div className="d-flex justify-content-between">
          <Link className="btn btn-primary">Envoyer un message</Link>
        </div>
      </div>
    </div>
  );
};

export default HousingCard;