import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsTasksFetching } from "../../redux/tasks/tasks.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.com";
import TaskPage from "./taskPage-com";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsTasksFetching,
});

const TaskPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(TaskPage);

export default TaskPageContainer;
