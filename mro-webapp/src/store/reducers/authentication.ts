import axios from "../../axios";
import { REQUEST, SUCCESS, FAILURE } from "./action-type.util";
import { IUser } from "../../model/user.model";

export const ACTION_TYPES = {
  LOGIN: "authentication/LOGIN",
  LOGOUT: "authentication/LOGOUT",
  ERROR_MESSAGE: "authentication/ERROR_MESSAGE",
};

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  account: {} as IUser,
  errorMessage: null as unknown as string,
  sessionHasBeenFetched: false,
};

export type AuthenticationState = Readonly<typeof initialState>;

export default (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        errorMessage: action.payload,
        loginError: true,
      };
    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        account: {
          userName: action.payload.data.username,
          token: action.payload.data.token,
        },
        loading: false,
        loginError: false,
        loginSuccess: true,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
      };
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const displayAuthError = (message: any) => ({
  type: ACTION_TYPES.ERROR_MESSAGE,
  message,
});

export const login: (UserName: string, Password: string) => void =
  (UserName, Password) => (dispatch: any, getState: any) => {
    dispatch({
      type: ACTION_TYPES.LOGIN,
      payload: axios.put("/Auth", {
        UserName,
        Password,
      }),
    });
  };

export const logout: () => void = () => (dispatch: any) => {
  dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
};
