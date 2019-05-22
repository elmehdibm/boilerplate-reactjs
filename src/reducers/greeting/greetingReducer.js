
const greetingReducer = (state = {
    "message": ""
}, action) => {
  switch(action.type){
      case 'SAY_HELLO':
      return {
          ...state,
          "message": action.message
      };
      default:
        return state;
  }
};

export default greetingReducer;