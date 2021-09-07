import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="backgroundLogin">
        <div className="help-recize-background">
          <div class="container-fluid main-content-login">
            <div class="row">
              <div class="col-sm">
                <div className="container subContent-login">
                  <div class="row">
                    <div class="col-sm">
                      <div className="box-dark-login">
                        <div>
                          <form className="login-form">
                            <div class="form-row">
                              <div class="form-group">
                                <label for="inputEmail4" className="text-white">E-mail*</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                              </div>
                              <div class="form-group">
                                <label for="inputPassword4" className="text-white">Password*</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                              </div>
                            </div>
                            <div className="forgot-password mt-3">
                              <Link>Forgot password</Link>
                            </div>
                            <button type="button" className="btn btn-light login-button mt-3">Login</button>
                            <button type="button" className="btn btn-light register-button">Register</button>
                          </form>
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


export default Login;