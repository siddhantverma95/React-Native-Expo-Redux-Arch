import repo from "../repository/index";
import {
  userLoggedIn,
  userLoggedInSuccess,
  userLoggedInFailed,
} from "../screens/Login/Login";
const authMiddleware = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== userLoggedIn.type) return next(action);

  const { user, onSuccess } = action.payload;

  if (user) {
    console.log(`${onSuccess}`, user);
    if (onSuccess) dispatch({ type: onSuccess, payload: action.payload });
  }
  next(action);
};

export default authMiddleware;
