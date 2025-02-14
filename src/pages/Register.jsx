import React, {useState} from "react";
import {Link} from "react-router-dom"
export const Register = () => {
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
      <h2>Sign Up</h2>

      <form>
        <p className="form_error-message">Any error from the server</p>
        <input type='text' name="fullName" onChange={changeInputHandler} placeholder="Full Name" autoComplete="true" autoFocus />
        <input type='email' name="email" onChange={changeInputHandler} placeholder="Email Address" autoComplete="true"  />
        <input type='password' onChange={changeInputHandler} name="password" placeholder="Password" autoComplete="true" />
        <input type='password' onChange={changeInputHandler} name="password2" placeholder="Confirm Password" autoComplete="true" />
        <p>Already have an account? <Link to="/">Sign in</Link></p>
        <button type="submit" className="btn primary">Register</button>
      </form>
      </div>
    </section>
  )
};
