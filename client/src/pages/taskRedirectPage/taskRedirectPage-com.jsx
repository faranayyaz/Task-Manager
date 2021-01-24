import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import TaskPageContainer from "../taskPage/taskPage-cont";
import HomePage from "../homepage/homepage-com";

import { fetchTasksStart } from "../../redux/tasks/tasks.actions";
import { getAvatarStart } from "../../redux/users/user.actions";

const TaskRedirectPage = ({ match, history }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && history.action !== "PUSH") {
      dispatch(fetchTasksStart(currentUser.token));
      dispatch(getAvatarStart(currentUser.token));
    }
  }, []);
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={currentUser ? TaskPageContainer : HomePage}
      />
    </div>
  );
};

export default TaskRedirectPage;
