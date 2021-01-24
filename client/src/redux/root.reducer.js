import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./users/user.reducer";
import tasksReducer from "./tasks/tasks.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
});

export default persistReducer(persistConfig, rootReducer);
