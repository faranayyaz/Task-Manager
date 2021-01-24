import TasksActionTypes from "./tasks.types";
import {
  getUpdatedArray,
  getUpdatedArrayAfterDelete,
} from "../../utils/tasks.utils";
const INITIAL_STATE = {
  currentUserTasks: [],
  isFetching: false,
  errorMessage: undefined,
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksActionTypes.FETCH_TASKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TasksActionTypes.FETCH_TASKS_SUCESS:
      return {
        ...state,
        currentUserTasks: action.payload,
        isFetching: false,
        errorMessage: undefined,
      };
    case TasksActionTypes.FETCH_TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case TasksActionTypes.POST_TASK_SUCESS:
      return {
        ...state,
        currentUserTasks: getUpdatedArray(
          state.currentUserTasks,
          action.payload
        ),
        errorMessage: undefined,
      };
    case TasksActionTypes.POST_TASKS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case TasksActionTypes.DELETE_TASK_SUCESS:
      return {
        ...state,
        currentUserTasks: getUpdatedArrayAfterDelete(
          state.currentUserTasks,
          action.payload
        ),
        errorMessage: undefined,
      };
    case TasksActionTypes.DELETE_TASKS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case TasksActionTypes.UPDATE_TASK_SUCESS:
      return {
        ...state,
      };
    case TasksActionTypes.UPDATE_TASKS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default tasksReducer;
