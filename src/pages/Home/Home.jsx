import { Link } from 'react-router-dom';
import Jumbotron from 'components/Jumbotron/Jumbotron';

const Home = () => {
  return(
    <>
    <div className="homepage">
      <Jumbotron />
    </div>
      Home page
      <Link to="ApartmentsProfile">Go to AdProfile</Link>


    </>
  )
}

export default Home;