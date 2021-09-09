import Carousel from 'react-bootstrap/Carousel'
import PropertyPresentation from 'components/PropertyPresentation/PropertyPresentation';
import Loading from 'components/Loading/Loading';
import HousingList from 'components/HousingList/HousingList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listingsFetch } from 'services/apiManager';
import { useParams } from 'react-router-dom';

const ApartmentsProfile = () => {
  const slug = useParams();
  const id = slug.slug - 1;

  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)

  const getListings = () => {
    dispatch(listingsFetch())
  }

  useEffect(() => {
    getListings();
  },[]);

  const listing = listings.listings[id];


  let fourListings = [];
  fourListings.push(listings.listings[0], listings.listings[1], listings.listings[2], listings.listings[3])


  return (
    <>

        {
          listings.listings ? 

      <div className="">
        <div className="container infoAp-location-price border">
          <div className="row d-flex top-content-location-price-responsive">
            <div className="row title-plus-location d-block mt-3">
              <div className="col-sm">
                <h5>{listing.title}</h5>
              </div>
              <div className="col-sm p-0">
                <div className="main-location">
                  <div className="ico-location"></div>
                  <p>{listing.location}</p>
                </div>
              </div>
            </div>
            <div className="row d-block top-pricing mt-3">
              <div className="col-sm total-price">
                <h5>{listing.price} €/semaine</h5>
              </div>
            </div>
          </div>
          <div className="container p-0 mt-2 content-carousel-contact-responsive">
            <div className="row d-flex">
              <div className="col-12 carousel-box border">
<div>
                    <img
                      className="d-block w-100 img-fluid"
                      src={listing.photo}
                      alt="First slide"
                    />
                    </div>
              </div>
            </div>
          </div>
          <PropertyPresentation description={listing.description}/>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div class="col-sm-12 main-content-cards-item-profile">
                {
                  listings.listings ? <HousingList data={fourListings} /> : <Loading />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
: <Loading /> 
        }

    </>
  )
}

export default ApartmentsProfile;