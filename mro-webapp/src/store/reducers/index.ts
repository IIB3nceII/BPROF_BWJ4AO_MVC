import { combineReducers } from "redux";
import appManager, { AppManagerState } from "./appManager";
import authentication,{ AuthenticationState } from "./authentication";

export interface IRootState {
  readonly appManager: AppManagerState;
  readonly authentication: AuthenticationState;
}

const appreducer = combineReducers<IRootState>({
  appManager,
  authentication,
});

const rootReducer = (state: any, action: any) => {
  return appreducer(state, action);
};

export default rootReducer;
