import * as types from "../types";

const initialState = {
  active: {
    cat1: [],
    cat2: []
  },
  groups: [],
  data: [],
  cat1: [],
  cat2: [],
  chartData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CSV_DATA:
      return {
        ...state,
        ...action.payload
      };

    case types.SET_FILTER:
      return {
        ...state,
        active: {
          ...state.active,
          [action.payload.name]: action.payload.value
        }
      };

    case types.APPLY_FILTER: {
      return {
        ...state,
        chartData: action.payload.chartData,
        groups: action.payload.groups
      };
    }

    default:
      return state;
  }
};
