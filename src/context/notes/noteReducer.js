const noteReducer = (state, action) => {
    switch (action.type) {
      case "SET_NOTES":
        return {
          ...state,
          notes: action.payload
        };
      // Other cases
      default:
        return state;
    }
  };
  
  export default noteReducer;
  