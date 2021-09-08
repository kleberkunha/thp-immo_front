import Cookies from "js-cookie";
import { fetchListingsFailure, fetchListingsRequest, fetchListingsSuccess } from "store/actions/listingActions";
import { fetchLoginFailure, fetchLoginLogout, fetchLoginRequest, fetchLoginSuccess } from "store/actions/userActions";
import { fetchRegisterFailure, fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterUnregister } from "store/actions/userActions";
// import { fetchUSerFailure, fetchUserRequest, fetchUserSuccess } from "store/actions/userActions";

const baseUrl = "https://thpimmo-back.herokuapp.com";


export const listingsFetch = () => {
  return (dispatch) => {
    dispatch(fetchListingsRequest());
    fetch(baseUrl + "/api/v1/properties", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchListingsFailure(response.errors));
        } else {
          dispatch(fetchListingsSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO CREATE A NEW USER
export const registerFetch = (username, email, password, passwordConfirmation) => {
  const data = {
    user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  };
  return (dispatch) => {
    let token
    dispatch(fetchRegisterRequest());
    fetch(baseUrl + "/api/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.headers.get("authorization")) {
          token = response.headers.get("authorization").split("Bearer ")[1];
        }
        return response.json()
      })
      .then((response ) => {
        if (response.errors || response.error) {
          dispatch(fetchRegisterFailure(response.errors));
        } else {
          Cookies.set("token_cookie", token);
          Cookies.set("id_cookie", response.data.id);
          dispatch(fetchRegisterSuccess(response));
        }
      });
  };
};


// BELOW IS THE FUNCTION TO LOG IN

export const loginFetch = (userData) => {

  return (dispatch) => {
    let token;
    dispatch(fetchLoginRequest());
    fetch(baseUrl + "/api/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response.headers)
        if (response.headers.get("authorization")) {
        token = response.headers.get("authorization").split("Bearer ")[1];
        }
        return response.json();
      })
      .then((response) => {
        console.log(response.headers)
        if (response.errors || response.error) {
          dispatch(fetchLoginFailure(response.errors));
        } else {
          Cookies.set("token_cookie", token);
          Cookies.set('id_cookie',response.data.id);
          dispatch(fetchLoginSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO LOG IN WITH COOKIES
export const loginUserWithCookie = async() =>{
  const token = Cookies.get('token_cookie');
  const id = Cookies.get('id_cookie');

  const cookiesConfig = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      // Authorization: `${token}`,
    },
  };

  const response = await fetch(baseUrl + `/api/users/${id}`, cookiesConfig)
  const cookieData = await response.json();
  if (!cookieData.error) {
    console.log("is true");
    return true;
  } else {
    console.log("is false");
    return false;
  }

};


// BELOW IS THE FUNCTION TO LOG OUT
export const logout = () => {
  return (dispatch) => {
    Cookies.remove('token_cookie')
    Cookies.remove("id_cookie");
    dispatch(fetchRegisterUnregister())
    dispatch(fetchLoginLogout())
  }
};