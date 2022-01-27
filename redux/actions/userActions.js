import * as constants from "../constants/userConstants";
import absoluteUrl from "next-absolute-url";
import axios from "axios";

//REGISTER USER

export const register = (userData) => async (dispatch) => {
  console.log("hitt");

  dispatch({ type: constants.REGISTER_USER_REQUEST });

  const response = await fetch(`/api/register/`, {
    //we need to add this since its a post req
    method: "POST",
    body: JSON.stringify(userData),
    //header to show we sending a json file
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data);
  console.log("d");
  if (data.message || data.error) {
    dispatch({
      type: constants.REGISTER_USER_FAIL,
      payload: data.message || data.error,
    });
  } else {
    dispatch({
      type: constants.REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  }
};

//Load User

export const loadUser = (req) => async (dispatch) => {
  //we catch the incoming req from context to get the base url
  const { origin } = absoluteUrl(req);
  try {
    dispatch({ type: constants.LOAD_USER_REQUEST });

    const { data } = await axios.get(`${origin}/api/users/user`);

    console.log(data.user);
    dispatch({
      type: constants.LOAD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clear errors

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: constants.CLEAR_ERRORS,
  });
};

//LOGOUT user

export const Logout = () => async (dispatch) => {
  try {
    await axios.get("/api/logout");

    dispatch({
      type: constants.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: constants.LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};
