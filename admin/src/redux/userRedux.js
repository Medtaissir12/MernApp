import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    users: [],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    //GET ALL
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
  //DELETE
  deleteUserStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  deleteUserSuccess: (state, action) => {
    state.isFetching = false;
    state.users = state.users.filter((user) => user._id !== action.payload);
  },
  deleteUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  //UPDATE
  updateUserStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  updateUserSuccess: (state, action) => {
    state.isFetching = false;
    state.users = state.users.map((user) =>
      user.id === action.payload._id ? action.payload.updatedUser : user
    );
  },
  updateUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  // ADD USER
  addUserStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  addUserSuccess: (state, action) => {
    state.isFetching = false;
    state.users.push(action.payload);
  },
  addUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
