import constants from "expo-constants";

const settings = {
  dev: {
    baseUrl: "https://api.covid19india.org",
  },
  staging: {
    baseUrl: "https://api.covid19india.org",
  },
  prod: {
    baseUrl: "https://api.covid19india.org",
  },
};

const getCurrentEnv = () => {
  if (__DEV__) return settings.dev;
  if (constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentEnv();
