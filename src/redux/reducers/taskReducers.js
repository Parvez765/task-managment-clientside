import { ActionTypes } from "../constants/action-type";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, { type, payload }) => {
  console.log("Payload", type)
  switch (type) {
    case ActionTypes.SET_TASKS:
      return { ...state, tasks: payload };

    default:
      return state;
  }
};

