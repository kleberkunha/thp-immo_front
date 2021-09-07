import { FETCH_LISTINGS_FAILURE, FETCH_LISTINGS_REQUEST, FETCH_LISTINGS_SUCCESS } from "store/actions/listingActions";

const initialState = {
  loading: false,
  error: "",
  listings: "",
};

export const listingsReducer = (state = initialState, { type, error, listings }) => {
  switch (type) {
    case FETCH_LISTINGS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LISTINGS_SUCCESS:
      return { ...state, loading: false, listings: listings, error:"" };

    case FETCH_LISTINGS_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};