import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (formData) console.log("Successfully logged in");
    // try {
    //   const user = {
    //     email,
    //     password
    //   };
    //   const body = JSON.stringify(user);
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   };
    //   const res = await axios.post("api/auth", body, config);
    //   console.log(res.data);
    //   //   if (formData) console.log("Successfully logged in");
    // } catch (error) {
    //   console.error(error.response.data);
    // }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign into your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => onChange(e)}
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};
export default Login;