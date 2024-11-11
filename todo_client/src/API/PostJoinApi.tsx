import axios from 'axios'
import React from 'react'

const PostJoinApi = async(username: string, password: string) =>  {
    const result = axios.post("http://localhost:8080/join", {username: username, password: password} )
    // console.log((await result).data);
    return (await result).data;
}

export default PostJoinApi