import axios from "axios";

const   PostUpdateApi = async (updateData) => {
  const formData = new FormData();
  formData.append("id", updateData.id);
  formData.append("username", updateData.username);
  formData.append("title", updateData.title);
  formData.append("text", updateData.text);
  formData.append("state", updateData.state);
  formData.append("deadline", updateData.deadline);
  console.log(formData);

  const result = axios.post("http://localhost:8080/todo/update", formData, {
    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
  });

  return result;
};

export default PostUpdateApi;
