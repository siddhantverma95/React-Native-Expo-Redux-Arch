import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/coreActions";
import { DATA_URL } from "../../config/constants";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload.cases_time_series;
    },
  },
});

export const { bugsReceived } = slice.actions;
export default slice.reducer;

//Action Creators
export const loadCovidData = () =>
  apiCallBegan({
    url: DATA_URL,
    onSuccess: bugsReceived.type,
  });
