import { Link, } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ApartmentsProfile = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container infoAp-location-price border">
          <div className="row d-flex">
            <div className="row title-plus-location d-block mt-3">
              <div className="col-sm mx-4">
                <h5>Luxurious house</h5>
              </div>
              <div className="col-sm p-0">
                <div className="main-location">
                  <div className="ico-location"></div>
                  Tavira (Santa Maria e Santiago), Tavira, Faro
                </div>
              </div>
            </div>
            <div className="row d-block top-pricing mt-3">
              <div className="col-sm total-price">
                <h5>445 000 €</h5>
              </div>
              <div className="col-sm price-m2">
                1 738 €/m²
              </div>
            </div>
          </div>
          <div className="container p-0 mt-2">
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
                  <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg">
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 list-mini-images">
            <ul>
              <li className="item img-ap-1"></li>
              <li className="item img-ap-2"></li>
              <li className="item img-ap-3"></li>
              <li className="item img-ap-4"></li>
              <li className="item img-ap-5"></li>
            </ul>
          </div>
          <h2>Properties</h2>
          <div className="properties">
            <div className="prop-1">
              <div>Useful area (m²): 315 m²</div>
              <div>Enterprise: no</div>
              <div>Bathrooms: 4 or more</div>
            </div>
            <div className="prop-2">
              <div>gross area (m²): 618 m²</div>
              <div>Typology: T4</div>
              <div>Condition: Used</div>
            </div>
            <div className="prop-3">
              <div>land area (m²): 303 m²</div>
              <div>Construction year: 2010</div>
            </div>
          </div>
          <hr />
          <section>
            <h2>
              Description
            </h2>
            <div>
              <div>
                Excellent fully exclusive 4 bedroom villa (two suites),
                three fronts and large garden, located in an urbanization of houses in Nogueira da Maia.
                <br/>
                Comprising basement, ground floor and floor, with exceptional areas and construction materials that make this house
                an asset for those who appreciate privacy, comfort and well-being.
              </div>
            </div>
          </section>
          <hr />
          <div>
            <ul className="d-flex list-more-Aps">
              <li>
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
              </li>
              <li>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://theluxurytravelbook.com/storage/media/images/resorts/gallery/home_hero_mobile/france-paris-luxury-apartments-palais-royal-gardens-1e-0-082fa1.jpg" />
                  <Card.Body>
                    <Card.Title>$ 500.000</Card.Title>
                    <Card.Text>115 m², 1522 EUR/m²</Card.Text>
                    <Card.Text>
                    Excellent T3 with 3 fronts and full view of the Douro River...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
              <li>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.sothebysrealty-france.com/datas/biens/thumbs/7127/7127_00-2021-08-14-0258.jpg" />
                  <Card.Body>
                    <Card.Title>$ 500.000</Card.Title>
                    <Card.Text>115 m², 1522 EUR/m²</Card.Text>
                    <Card.Text>
                      Floor of a T3 villa in a gated community in the urbanization ...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
              <li>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10032002-700x466-FIT_AND_TRIM-ec6482593839de7a175f99bcdd955ebd.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" />
                  <Card.Body>
                    <Card.Title>$ 500.000</Card.Title>
                    <Card.Text>115 m², 1522 EUR/m²</Card.Text>
                    <Card.Text>
                      Floor of a T3 villa in a gated community in the urbanization ...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApartmentsProfile;