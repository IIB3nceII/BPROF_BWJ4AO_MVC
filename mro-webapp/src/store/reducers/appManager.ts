export const ACTION_TYPES = {
  OPEN_SIDEBAR: "appManager/OPEN_SIDEBAR",
  CLOSE_SIDEBAR: "appManager/CLOSE_SIDEBAR",
};

const initialState = {
  showSidebar: false,
};

export type AppManagerState = Readonly<typeof initialState>;

export default (
  state: AppManagerState = initialState,
  action: any
): AppManagerState => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_SIDEBAR:
      return {
        ...state,
        showSidebar: true,
      };
      case ACTION_TYPES.CLOSE_SIDEBAR:
      return {
        ...state,
        showSidebar: false,
      };

    default:
      return state;
  }
};

export const setSidebarOpen=()=>({
    type: ACTION_TYPES.OPEN_SIDEBAR,
});

export const setSidebarClose=()=>({
    type: ACTION_TYPES.OPEN_SIDEBAR,
});
