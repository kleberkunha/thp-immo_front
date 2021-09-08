export const FETCH_LISTINGS_REQUEST = "FETCH_LISTINGS_REQUEST";
export const FETCH_LISTINGS_SUCCESS = "FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_FAILURE = "FETCH_LISTINGS_FAILURE";

export const fetchListingsRequest = () => {
  return {
    type: FETCH_LISTINGS_REQUEST,
  };
};
export const fetchListingsSuccess = (listings) => {
  return {
    type: FETCH_LISTINGS_SUCCESS,
    listings,
  };
};
export const fetchListingsFailure = (error) => {
  return {
    type: FETCH_LISTINGS_FAILURE,
    error,
  };
};