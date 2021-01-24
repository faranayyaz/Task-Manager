import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  getTasksAPI,
  postTaskAPI,
  deleteTaskAPI,
  updateTaskAPI,
} from "../../utils/tasks.utils";
import {
  fetchTasksSuccess,
  fetchTasksFailure,
  postTaskFailure,
  postTaskSuccess,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskFailure,
  updateTaskSuccess,
} from "./tasks.actions";
import TasksActionTypes from "./tasks.types";

export function* fetchTasksStartAsync({ payload }) {
  try {
    const tasks = yield getTasksAPI(payload);

    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

export function* onFetchTasksStart() {
  yield takeLatest(TasksActionTypes.FETCH_TASKS_START, fetchTasksStartAsync);
}

export function* postTaskStartAsync({ payload }) {
  try {
    const response = yield postTaskAPI(payload);
    yield put(postTaskSuccess(response.data));
  } catch (error) {
    yield put(postTaskFailure(error.message));
  }
}

export function* onPostTaskStart() {
  yield takeLatest(TasksActionTypes.POST_TASK_START, postTaskStartAsync);
}

export function* deleteTaskStartAsync({ payload }) {
  try {
    const response = yield deleteTaskAPI(payload);
    yield put(deleteTaskSuccess(response.data));
  } catch (error) {
    yield put(deleteTaskFailure(error.message));
  }
}

export function* onDeleteTaskStart() {
  yield takeLatest(TasksActionTypes.DELETE_TASK_START, deleteTaskStartAsync);
}

export function* updateTaskStartAsync({ payload }) {
  try {
    const response = yield updateTaskAPI(payload);
    yield put(updateTaskSuccess(response.data));
  } catch (error) {
    yield put(updateTaskFailure(error.message));
  }
}

export function* onUpdateTaskStart() {
  yield takeLatest(TasksActionTypes.UPDATE_TASK_START, updateTaskStartAsync);
}

export function* tasksSagas() {
  yield all([
    call(onFetchTasksStart),
    call(onPostTaskStart),
    call(onDeleteTaskStart),
    call(onUpdateTaskStart),
  ]);
}
