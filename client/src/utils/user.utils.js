import axios from "axios";
const url = "users/";

export async function createUserWithEmailAndPassword(userData) {
  const response = await axios({
    method: "post",
    url: `${url}`,
    data: userData,
  })
    .then((response) => {
      response.data.data["token"] = response.data.token;
      return response.data.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw error.response.data;
    });
  return response;
}

export async function logOutAsync(token) {
  var config = {
    headers: { Authorization: token },
  };

  var bodyParameters = {
    key: "value",
  };

  const data = axios
    .post(url + "logout", bodyParameters, config)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      throw false;
    });
  return data;
}

export async function signInWithEmailAndPassword(userData) {
  const data = await axios({
    method: "post",
    url: url + "login",
    data: userData,
  })
    .then((response) => {
      response.data.user["token"] = response.data.token;
      return response.data.user;
    })
    .catch((error) => {
      throw error.message;
    });
  return data;
}

export async function getAvatarAPI(token) {
  const data = await axios
    .get("/users/avatar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(
      (response) => {
        var binary = "";
        var bytes = [].slice.call(new Uint8Array(response.data.data.data));
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
      },
      (error) => {
        throw error;
      }
    );
  return data;
}
export async function updateUserAsync(payload) {
  var bodyParameters = {
    ...payload.data,
  };
  var config = {
    headers: { Authorization: payload.token },
  };
  return await axios
    .patch(url + "updateuser", bodyParameters, config)
    .then((response) => {
      response.data.user["token"] = response.data.token;
      return response.data.user;
    })
    .catch((error) => {
      throw error;
    });
}
