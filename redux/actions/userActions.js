import * as constants from "../constants/userConstants";
import absoluteUrl from "next-absolute-url";
import axios from "axios";

//REGISTER USER

export const registerUser = (userData) => async (dispatch) => {
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

//Login Userrr

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: constants.LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/login",
      { email, password },
      config
    );

    dispatch({
      type: constants.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: constants.LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Load User

export const LoadUser = (req, token) => async (dispatch) => {
  //we catch the incoming req from context to get the base url
  const { origin } = absoluteUrl(req);
  try {
    dispatch({ type: constants.LOAD_USER_REQUEST });

    const config = {
      headers: {
        cookie: token,
      },
    };
    const { data } = await axios.get(`${origin}/api/users/user`, config);

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
