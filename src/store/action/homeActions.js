import * as types from "../types";

export const setCSVdata = data => ({
  type: types.SET_CSV_DATA,
  payload: {
    ...data
  }
});

export const setFilter = (val, name) => ({
  type: types.SET_FILTER,
  payload: {
    value: val,
    name: name
  }
});

export const applyFilter = obj => ({
  type: types.APPLY_FILTER,
  payload: {
    ...obj
  }
});
