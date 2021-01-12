import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");

export const cacheCallBegan = createAction("cache/callBegan");
export const cacheCallSuccess = createAction("cache/callSuccess");
export const cacheCallFailed = createAction("cache/callFailed");
