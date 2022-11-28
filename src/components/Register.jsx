import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

     const [user, setUser] = useState({
      username: "",
      email: "",
      password: ""
     });

     //handle input
     const handleInput = (event) => {
      let name = event.target.name;
      let value = event.target.value;

      setUser({...user, [name]:value});
     }

     //handle submit
     const handleSubmit = async (event) => {
      event.preventDefault();
      //store data into variables
      const {username, email, password} = user;
      //It should be hosted on port 3000 by default 
      // but we need it on port 3001 as backened is connected
      // there, so porxy will be used
      try {
        const res = await fetch('/register', {
          method : 'POST',
          headers : {
            "Content-Type" : "application/json",
          },
          body : JSON.stringify({
            username, email, password
          })
        })

        if(res.status === 400 || !res){
          window.alert("Already Used Details");
        }else{
          window.alert("Registered Successfully");
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
     }

  return (
    <div>
        <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">New Here?</h1>
            <p className="lead text-center">Enter Your details to Register</p>
            <h5 className='mb-4'>OR</h5>
            <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Username</label>
                <input type="text" className="form-control" id="name" name="username" value = {user.username} onChange={handleInput}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value = {user.email} onChange={handleInput}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value = {user.password} onChange={handleInput} />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I Agree Terms and Conditions</label>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;