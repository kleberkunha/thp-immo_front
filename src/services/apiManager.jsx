import Cookies from "js-cookie";
import { fetchListingsFailure, fetchListingsRequest, fetchListingsSuccess } from "store/actions/listingActions";


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

export const loginUser = (userData) => async(dispatch) => {  
  
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  const res = await fetch(baseUrl + '/api/login', config)
  const user = await res.json();
  let token = await res.headers.get('authorization');
  if (user.data) {
    Cookies.set('token', token.split(' ')[1], {secure: true});
    // Cookies.set('token', token);
    Cookies.set('id', user.data.id, {secure: true});
    dispatch({ type: LOGIN_USER, payload: user.data });
  } else {
    console.log('login fetch not working')
  }
};