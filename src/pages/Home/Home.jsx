import { Link } from 'react-router-dom';
import Jumbotron from 'components/Jumbotron/Jumbotron';
import HousingList from 'components/HousingList/HousingList';

const Home = () => {
  return(
    <>
    <div className="homepage">
      <Jumbotron />
      <HousingList />
    </div>
      <Link to="ApartmentsProfile">Go to AdProfile</Link>
      <button className="btn btn-primary">dddd</button>

    </>
  )
}

export default Home;