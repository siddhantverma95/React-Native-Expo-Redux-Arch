import React from "react";
import { createSlice, createAction } from "@reduxjs/toolkit";

//Action Creator
export const userLoggedIn = createAction("user/userLoggedIn");
export const userLoggedInSuccess = createAction("user/userLoggedInSuccess");
export const userLoggedInFailed = createAction("user/userLoggedInFailed");

const slice = createSlice({
  name: "user",
  initialState: {
    user: false,
    loading: false,
  },
  reducers: {
    userLoginSuccess: (state, action) => {
      state.user = action.payload.user;
      //console.log(state.user);
    },
  },
});

export const { userLoginSuccess } = slice.actions;
export default slice.reducer;

//Action Creators
export const loadUserData = () =>
  userLoggedIn({
    user: true,
    onSuccess: userLoginSuccess.type,
  });
