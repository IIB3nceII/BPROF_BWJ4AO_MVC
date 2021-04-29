import { combineReducers } from "redux";
import appManager, { AppManagerState } from "./appManager";

export interface IRootState {
  readonly appManager: AppManagerState;
}

const appreducer = combineReducers<IRootState>({
  appManager,
});

const rootReducer = (state: any, action: any) => {
  return appreducer(state, action);
};

export default rootReducer;
