import axios from 'axios'
import React from 'react'

const PostLoginApi = async(username: string, password: string) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
 
    const result = axios.post("http://localhost:8080/login", formData)
    console.log(result);

    return result;

 
}

export default PostLoginApi