import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getPostsFromApiAsync } from "../../services/apiService";
import { API_FAILURE, API_REQUEST, API_SUCCESS } from "../constants";
import { RootState } from "../store";

export function hitTestApi(){
  return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState : () => RootState) => {
    // console.log("===>myState",JSON.stringify(getState().count))    
    try{
      dispatch({type: API_REQUEST});
      const apiRequest = await getPostsFromApiAsync();
      return dispatch({type: API_SUCCESS, payload: apiRequest})
    }catch(e: any){
      return dispatch({type: API_FAILURE, payload: JSON.stringify(e)})
    }
  }
}