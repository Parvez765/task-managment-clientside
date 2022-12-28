import { ActionTypes } from "../constants/action-type";

export const setTasks = (tasks) => {
  console.log("tasks", tasks)
  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks,
  };
};