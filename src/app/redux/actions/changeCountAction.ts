import { CHANGE_COUNT } from "../constants";

export function changeCount(count: number){
  return {
    type: CHANGE_COUNT,
    payload: count
  }
}