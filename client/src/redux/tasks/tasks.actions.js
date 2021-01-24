import TasksActionTypes from "./tasks.types";

export const fetchTasksStart = (token) => ({
  type: TasksActionTypes.FETCH_TASKS_START,
  payload: token,
});

export const fetchTasksSuccess = (tasks) => ({
  type: TasksActionTypes.FETCH_TASKS_SUCESS,
  payload: tasks,
});

export const fetchTasksFailure = (errorMessage) => ({
  type: TasksActionTypes.FETCH_TASKS_FAILURE,
  payload: errorMessage,
});

export const postTaskStart = (taskToken) => ({
  type: TasksActionTypes.POST_TASK_START,
  payload: taskToken,
});

export const postTaskSuccess = (task) => ({
  type: TasksActionTypes.POST_TASK_SUCESS,
  payload: task,
});

export const postTaskFailure = (errorMessage) => ({
  type: TasksActionTypes.POST_TASK_FAILURE,
  payload: errorMessage,
});

export const deleteTaskStart = (taskIDToken) => ({
  type: TasksActionTypes.DELETE_TASK_START,
  payload: taskIDToken,
});

export const deleteTaskSuccess = (task) => ({
  type: TasksActionTypes.DELETE_TASK_SUCESS,
  payload: task,
});

export const deleteTaskFailure = (errorMessage) => ({
  type: TasksActionTypes.DELETE_TASK_FAILURE,
  payload: errorMessage,
});

export const updateTaskStart = (taskToken) => ({
  type: TasksActionTypes.UPDATE_TASK_START,
  payload: taskToken,
});

export const updateTaskSuccess = (task) => ({
  type: TasksActionTypes.UPDATE_TASK_SUCESS,
  payload: task,
});

export const updateTaskFailure = (errorMessage) => ({
  type: TasksActionTypes.UPDATE_TASK_FAILURE,
  payload: errorMessage,
});
