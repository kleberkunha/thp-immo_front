import Carousel from 'react-bootstrap/Carousel'
import ContactCard from 'components/ContactCard/ContactCard';
import PropertyPresentation from 'components/PropertyPresentation/PropertyPresentation';
import Loading from 'components/Loading/Loading';
import HousingList from 'components/HousingList/HousingList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listingsFetch } from 'services/apiManager';

const ApartmentsProfile = () => {

  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)

  const getListings = () => {
    dispatch(listingsFetch())
  }


  useEffect(() => {
    getListings();
  },[]);


  let fourListings = [];
  fourListings.push(listings.listings[0], listings.listings[1], listings.listings[2], listings.listings[3])


  return (
    <>
      <div className="mt-5">
        <div className="container infoAp-location-price border">
          <div className="row d-flex top-content-location-price-responsive">
            <div className="row title-plus-location d-block mt-3">
              <div className="col-sm title-responsive">
                <h5>Luxurious house</h5>
              </div>
              <div className="col-sm p-0">
                <div className="main-location">
                  <div className="ico-location"></div>
                  <p>Tavira (Santa Maria e Santiago), Tavira, Faro</p>
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
          <div className="container p-0 mt-2 content-carousel-contact-responsive">
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
              <ContactCard />
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
          <PropertyPresentation />
          <div className="container main-card-list-profileAp">
          {
            listings.listings ?
              <HousingList data={fourListings} />
              :
              <Loading />
          }

          </div>
        </div>
      </div>
    </>
  )
}

export default ApartmentsProfile;