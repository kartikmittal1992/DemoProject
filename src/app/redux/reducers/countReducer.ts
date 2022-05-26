import { CHANGE_COUNT } from "../constants";

const initialCounterState = {
  count: 0
}

const countReducer = (state = initialCounterState, action: any) => {
  console.log("ggg"+JSON.stringify(action));
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        count: action?.payload
      } 
    default:
      return state;
  }
}

export default countReducer;