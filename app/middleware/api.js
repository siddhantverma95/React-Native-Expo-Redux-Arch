import repo from "../repository/index";
import * as actions from "../config/api";

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  const response = await repo.apiClient.get(url);

  if (response.ok) {
    //General
    dispatch(actions.apiCallSuccess(response.data));
    //Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } else {
    //General
    dispatch(actions.apiCallFailed(response.problem));
    //Specific
    if (onError) dispatch({ type: onError, payload: response.problem });
  }
};

export default apiMiddleware;
