import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../rqstMethods";





export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const url = "https://nbastoreapp.onrender.com/api";
