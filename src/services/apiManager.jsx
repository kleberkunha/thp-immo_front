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