import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

const ApartmentsProfile = () => {
  return (
    <>
    <div className="border">
      <div className="container infoAp-location-price border">
        <div className="row d-flex">
          <div className="row title-plus-location d-block">
            <div className="col-sm">
              Moradia T4 de Luxo
            </div>
            <div className="col-sm">
            Tavira (Santa Maria e Santiago), Tavira, Faro
            </div>
          </div>
          <div className="row d-block top-pricing">
            <div className="col-sm total-price">
              445 000 €
            </div>
            <div className="col-sm price-m2">
              1 738 €/m²
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row d-flex">
          <div className="col-9 carousel-box border">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.nortoncounty.net/wp-content/uploads/2021/05/im-234627.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://medias.residences-immobilier.com/pict/f600x400/2/5/7/6/ext_0_2576638.jpg?t=9685981"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.proprietesparisiennes-sothebysrealty.com/datas/biens/thumbs/995/995_00-2020-10-21-1630.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
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
                <div class="form-row">
                  <div class="form-group col-md-11">
                    <label for="inputEmail4">Name*</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                  </div>
                  <div class="form-group col-md-11">
                    <label for="inputPassword4">Email*</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Phone Number*</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <label htmlFor="exampleFormControlTextarea1">
                  Send a message.
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"/>
                <p className="text-responsible mt-2">Responsible for processing your data: THP NEXT</p>
                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                <label class="form-check-label mx-2" for="gridCheck1">
                  Example checkbox
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
        
      </div>












    </div>




    </>
  )
}

export default ApartmentsProfile;