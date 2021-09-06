import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="container-fluid main-begin-session">
        <div className="container begin-session">
          <div>
            <p>Begin Session</p>
          </div>
        </div>
      </div>
      <div class="container-fluid main-content-login">
        <div class="row">
          <div class="col-sm">
            <div className="container subContent-login">
              <div class="row">
                <div class="col-sm">
                  <div className="box-dark-login">
                    <div>
                      <form className="login-form p-5">
                        <div class="form-row">
                          <div class="form-group">
                            <label for="inputEmail4">E-mail*</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                          </div>
                          <div class="form-group">
                            <label for="inputPassword4">Password*</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputAddress">Phone Number*</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="forgot-password">
                          <Link>Forgot password</Link>
                        </div>
                        <button type="button" className="btn btn-light login-button">Login</button>
                      </form>
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


export default Login;