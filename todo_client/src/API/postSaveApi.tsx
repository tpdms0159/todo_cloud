import axios from "axios";
import useAuthStore from "../variable/useAuthStore.tsx";

const postSaveApi = (data) => { 
    const todoForm = new FormData()
    todoForm.append("username", data.username);
    todoForm.append("title", data.title);
    todoForm.append("text", data.text);
    todoForm.append("deadline", data.deadline);

    const result = axios.post("http://localhost:8080/todo/create", todoForm,
        {
            headers: {Authorization : "Bearer " + sessionStorage.getItem("token")}
        }
    )

    return result;

}

export default postSaveApi;