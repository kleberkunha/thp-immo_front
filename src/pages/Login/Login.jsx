import LoginForm from "components/LoginForm/LoginForm";

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
                        <LoginForm />
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