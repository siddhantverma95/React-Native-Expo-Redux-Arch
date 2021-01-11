import React from "react";
import { AsyncStorage } from "react-native";

const setCache = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`SET CACHE ERROR: ${error}`);
  }
};

const getCache = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log(`GET CACHE ERROR: ${error}`);
  }
};

export default cacheHelper = { setCache, getCache };
