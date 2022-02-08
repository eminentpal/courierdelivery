import * as ship from "../constants/shipConstants";

export const myShipmentReducer = (state = { myshipments: [] }, action) => {
  switch (action.type) {
    case ship.MY_SHIPMENTS_REQUEST:
      return {
        loading: true,
      };

    case ship.MY_SHIPMENTS_SUCCESS:
      return {
        loading: false,
        myshipments: action.payload,
      };

    case ship.MY_SHIPMENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ship.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
