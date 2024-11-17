import axios from "axios";

const PostDeleteApi = (deleteData) => {
  const formData = new FormData();
  console.log(deleteData.username);
  formData.append("id", deleteData.id);
  formData.append("username", deleteData.username);

  console.log(formData);

  const result = axios.post("http://localhost:8080/todo/delete", formData, {
    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
  });

  return result;
};

export default PostDeleteApi;
