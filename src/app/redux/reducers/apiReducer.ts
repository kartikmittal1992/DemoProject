import { API_SUCCESS, CHANGE_COUNT } from "../constants";

const initialApiState = {
  data: null
}

const apiReducer = (state = initialApiState, action: any) => {
  switch (action.type) {
    case API_SUCCESS:
      return {
        ...state,
        data: action?.payload
      } 
    default:
      return state;
  }
}

export default apiReducer;