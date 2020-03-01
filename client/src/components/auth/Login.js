import React, { useState } from 'react'
import { loginUser } from '../../actions/authActions';
import { createStore } from 'redux';
import authReducer from '../../reducers/authReducer';

const Login = (props) => {

  const store = createStore(authReducer);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData
  store.subscribe(d => {
    console.log('NGRX', d);
  })
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    console.log('test', formData);


    loginUser(formData)
      .then(data => {
        console.log(data);
        localStorage.setItem("jwtToken", data.token);
        props.history.push("/logged");
        
      })
      .catch(err => {
        alert('email or password is wrong')
      });

  }
  return <section className="container">
    <h1 className="large text-primary">Sign In</h1>
    <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
    <form className="form" >
      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
      </div>
      <input type="button" className="btn btn-primary" onClick={e => onSubmit(e)} value="Login" />
    </form>
    <p className="my-1">
      Don't have an account? <a href="register.html">Sign Up</a>
    </p>
  </section>
};

export default Login