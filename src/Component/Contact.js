import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();
  const user = (e) => {
    setUsername(e.target.value);
  };
  const pass = (e) => {
    setPassword(e.target.value);
  };
const apicall= (e)=>{
  e.preventDefault();
  axios.post("https://dummyjson.com/auth/login ",{
    username:username,
    password:password,
  })
  .then((respones)=>{
    console.log(respones.data);
    localStorage.setItem("token",JSON.stringify(respones.data.token))
    navigate("/");
  })
  .catch((error)=>{
    console.log("error",error)
  })

}
  return (
    <div className="contact-box">
      <form onSubmit={apicall}>
        <div className="mb-3">
          <label form="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={user}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label form="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={pass}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" form="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
