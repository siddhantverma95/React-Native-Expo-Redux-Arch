import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../screens/Home/Home";
import logger from "../middleware/logger";

import apiMiddleware from "../middleware/api";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), apiMiddleware],
  });
}
