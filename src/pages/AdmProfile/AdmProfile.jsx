import { Link } from "react-router-dom";
import ApartmentCard from "components/CardsApComponent/ApartmentCard";
const AdmProfile = () => {
  return (
    <>
      <div className="profile-adm-background">
        <div className="helping-recisize-backgroundADM">
          <div className="container bootstrap snippets bootdey content-profile">
            <div className="row bg-light p-5">
              <div className="profile-nav col-md-3">
                <div className="panel">
                  <div className="user-heading round">
                      <Link to="#">
                          <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                      </Link>
                      <h1>Camila Smith</h1>
                      <p>deydey@theEmail.com</p>
                  </div>

                  <ul className="nav nav-pills nav-stacked">
                      <li className="active"><Link to="#"> <i className="fa fa-user"></i> Profile</Link></li>
                      <li><Link to="#"> <i className="fa fa-calendar"></i> Recent Activity <span className="label label-warning pull-right r-activity">9</span></Link></li>
                      <li><Link to="#"> <i className="fa fa-edit"></i> Edit profile</Link></li>
                  </ul>
                </div>
              </div>
              <div className="profile-info col-md-9">
                <div className="panel">
                  <div className="bio-graph-info">
                    <h1>Details</h1>
                    <div className="row">
                      <div className="bio-row">
                          <p><span>First Name </span>: Camila</p>
                      </div>
                      <div className="bio-row">
                          <p><span>Last Name </span>: Smith</p>
                      </div>
                      <div className="bio-row">
                          <p><span>Country </span>: Australia</p>
                      </div>
                      <div className="bio-row">
                          <p><span>Email </span>: jsmith@flatlab.com</p>
                      </div>
                      <div className="bio-row">
                          <p><span>Mobile </span>: (12) 03 4567890</p>
                      </div>
                      <div className="bio-row">
                          <p><span>Phone </span>: 88 (02) 123456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>My itens</h3>
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel">
                        <div className="panel-body">
                          <ApartmentCard />
                          <ApartmentCard />
                          <ApartmentCard />
                        </div>
                        <div className="panel-body">
                          <ApartmentCard />
                          <ApartmentCard />
                          <ApartmentCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdmProfile;