import { Link } from 'react-router-dom';
import Jumbotron from 'components/Jumbotron/Jumbotron';
import HousingList from 'components/HousingList/HousingList';
import Navbar from 'components/Navbar/Navbar';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listingsFetch } from 'services/apiManager';

const Home = () => {

  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)

  const getListings = () => {
    dispatch(listingsFetch())
  }


  useEffect(() => {
    getListings();
  },[]);



  return(
    <>
    <div className="homepage">
      <Navbar />
      <Jumbotron />
      <div className="container-fluid home-cards">
        {
          listings.listings ?

          <HousingList data={listings.listings} />
          :
          <Loading />
        }
      </div>
    </div>
    </>
  )
}

export default Home;