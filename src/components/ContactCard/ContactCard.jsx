import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, } from 'react-router-dom';

const ContactCard = () => {
  return (
  <div className="col-3 contact-box border">
    <div className="d-flex mt-4">
      <div className="icoimg"></div>
      <div className="text-left-contact mt-2 mx-3">
        <p className="m-0">Casa26</p>
        <div className="d-flex left-side-details-contact">
          <p className="phone-number-hide">220</p>
          <Link className="show-number">Show Number</Link>
        </div>
      </div>
    </div>
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-11">
            <label for="inputEmail4">Name*</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
          <div className="form-group col-md-11">
            <label for="inputPassword4">Email*</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Phone Number*</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <label htmlFor="exampleFormControlTextarea1">
          Send a message.
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"/>
        <p className="text-responsible mt-2">Responsible for processing your data: THP NEXT</p>
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label mx-2" for="gridCheck1">
          Example checkbox
        </label>
      </form>
      <div className="d-grid gap-2 mt-2">
        <Button variant="primary" size="lg">
          Send Message
        </Button>
      </div>
    </div>
  </div>
  );
};

export default ContactCard;