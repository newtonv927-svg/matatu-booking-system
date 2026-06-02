import { useState } from "react";
import axios from "axios";

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const loginUser = async()=>{

    try{

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      )

      localStorage.setItem("token",res.data.token)

      alert("Login Successful")

    }catch(error){

      console.log(error)

    }

  }

  return(

    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-[400px]">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-xl mb-6"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-blue-900 text-white py-3 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>

  )

}

export default Login