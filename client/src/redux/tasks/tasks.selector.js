import { createSelector } from "reselect";
const selectTasks = (state) => state.tasks;

export const selectCurrentUserTasks = createSelector(
  selectTasks,
  (tasks) => tasks.currentUserTasks
);

export const selectIsTasksFetching = createSelector(
  selectTasks,
  (tasks) => tasks.isFetching
);
