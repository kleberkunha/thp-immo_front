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
      <button className="btn btn-primary">dddd</button>

    </>
  )
}

export default Home;