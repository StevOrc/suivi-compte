const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        transactions: action.payload,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        loading: false,
        loaded: true,
        errror: null,
        transactions: state.transactions.filter(
          (el) => el._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "ERROR_TRANSACTION":
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
