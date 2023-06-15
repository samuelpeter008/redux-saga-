import axios from "axios"

axios.defaults.baseURL="http://localhost:3000";

export const getUserAPI=async()=>{axios.get("/students")}

export const getUserByIdAPI=async(id)=>{axios.get("/students/"+{id})}

export const createUserAPI=async(user)=>{axios.post("/students",user)}

export const deleteUserAPI=async(id)=>{axios.delete("/students/"+{id})}

export const updateUserAPI=async(user)=>{axios.put("/students/",user)}