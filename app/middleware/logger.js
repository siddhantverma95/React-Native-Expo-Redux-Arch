const logger = (store) => (next) => (action) => {
  console.log("STORE: ", store);
  console.log("ACTION: ", action);
};

export default logger;
