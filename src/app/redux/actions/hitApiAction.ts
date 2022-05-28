import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { call, delay, put } from "redux-saga/effects";
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

export function* hitSagaTestApi(action: any): Generator<any>{
  const response = yield call(getPostsFromApiAsync);
  yield delay(1000);
  yield put({type: API_SUCCESS,payload: response});
}

export const hitToolkitTestApi = createAsyncThunk('apiReducer', async () => {
  const apiRequest = await getPostsFromApiAsync();
  return apiRequest;
}) 