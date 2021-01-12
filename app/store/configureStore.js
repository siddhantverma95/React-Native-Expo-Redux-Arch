import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import reducer from "../screens/Home/Home";
import logger from "../middleware/logger";
import userReducer from "../screens/Login/Login";

import apiMiddleware from "../middleware/api";
import authMiddleware from "../middleware/auth";

export default function () {
  return configureStore({
    reducer: combineReducers({
      user: userReducer,
      home: reducer,
    }),
    middleware: [...getDefaultMiddleware(), authMiddleware, apiMiddleware],
  });
}
