import * as ship from "../constants/shipConstants";
import absoluteUrl from "next-absolute-url";
import axios from "axios";

//new shipment

export const newShipment = (shipmentData) => async (dispatch) => {
  try {
    dispatch({ type: ship.NEW_SHIPMENT_REQUEST_REQUEST });

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const { data } = await axios.post(
    //   `/api/shipments/shipment`,
    //   shipmentData,
    //   config
    // );

    // console.log(data);

    const response = await fetch(`/api/shipments/shipment`, {
      //we need to add this since its a post req
      method: "POST",
      body: JSON.stringify(shipmentData),
      //header to show we sending a json file
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: ship.NEW_SHIPMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ship.NEW_SHIPMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clear errors

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: ship.CLEAR_ERRORS,
  });
};

//get logged in user shipment orders

export const myShipments = () => async (dispatch) => {
  try {
    dispatch({ type: ship.MY_SHIPMENTS_REQUEST });

    const { data } = await axios.get("/api/shipments/usershipments");

    dispatch({
      type: ship.MY_SHIPMENTS_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: ship.MY_SHIPMENTS_FAIL,
      error: error.response.data.message,
    });
  }
};
