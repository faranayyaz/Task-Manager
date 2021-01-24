import axios from "axios";

export const getUpdatedArray = (old, newItem) => {
  old.push(newItem);
  return [...old];
};

export const getUpdatedArrayAfterDelete = (old, deleted) => {
  return old.filter((task) => task._id !== deleted._id);
};

export async function deleteTaskAPI({ taskID, token }) {
  const data = await axios
    .delete("/tasks/" + taskID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(
      (response) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );
  return data;
}

export async function getTasksAPI(token) {
  const data = await axios
    .get("/tasks/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(
      (response) => {
        return Object.values(response.data);
      },
      (error) => {
        throw error;
      }
    );
  return data;
}

export async function postTaskAPI(payload) {
  var bodyParameters = {
    ...payload.task,
  };
  var config = {
    headers: { Authorization: payload.token },
  };
  return await axios
    .post(/tasks/, bodyParameters, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

export async function updateTaskAPI({ task, token }) {
  var bodyParameters = {
    description: task.description,
    completed: task.completed,
  };
  var config = {
    headers: { Authorization: token },
  };
  return await axios
    .patch(/tasks/ + task._id, bodyParameters, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}
