import axios from "axios";

const GetTodoApi = (username, deadline: string) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("deadline", deadline);

  const params = {};
  for (let [key, value] of formData.entries()) {
    params[key] = value;
  }
  const result = axios.get("http://localhost:8080/todo/read", {
    params: params,
    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
  });

  return result;
};

export default GetTodoApi;
