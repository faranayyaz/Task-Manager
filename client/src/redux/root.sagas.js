import { all, call } from "redux-saga/effects";

import { userSagas } from "./users/user.sagas";
import { tasksSagas } from "./tasks/tasks.sagas";

export default function* rootSagas() {
  yield all([call(userSagas), call(tasksSagas)]);
}
