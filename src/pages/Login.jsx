import React, {useState} from "react";
import {Link} from "react-router-dom"
export const Login = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: ""
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {
        ...prevState, [e.target.name]: e.target.value
      }
    }) 
  }

  // console.log(userData)
  return (
    <section className="register">
      <div className="container register_container">
      <h2>Sign In</h2>

      <form>
        <p className="form_error-message">Any error from the server</p>
        <input type='email' name="email" onChange={changeInputHandler} placeholder="Email Address" autoComplete="true"  />
        <input type='password' onChange={changeInputHandler} name="password" placeholder="Password" autoComplete="true" />
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        <button type="submit" className="btn primary">Login</button>
      </form>
      </div>
    </section>
  )
};


export default Login 
