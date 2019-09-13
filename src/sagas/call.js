import * as api from "./api";
import { put, call } from "redux-saga/effects";
import * as types from "../store/types";

export function* getCSVdata() {
  let data = yield call(api.getCSVdata);
  console.log("data",data)
  // yield put({ type: types.SET_CSV_DATA, payload: { ...data } });
}
