import React, { Fragment, useState } from 'react'
import { createStore } from 'redux';
import authReducer from '../../reducers/authReducer';
import { registerUser } from '../../actions/authActions';

const Register = () => {
  const store = createStore(authReducer);

  const[formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    date: '',
    adress: ''
  });

  const { firstname, lastname, email, password, date, adress } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(password == ''){
      console.log('Password does not match');
    }else{
      registerUser(formData,[])(store.dispatch)
    }
  } 
  

  return <Fragment><h1 className="large text-primary">Sign Up</h1>
  <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
  <form className="form" onSubmit={e => onSubmit(e)}>
    <div className="form-group">
      <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={e => onChange(e)} required />
    </div>
    <div className="form-group">
      <input type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={e => onChange(e)} required />
    </div>
    <div className="form-group">
      <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
      <small className="form-text"
        >This site uses Gravatar so if you want a profile image, use a
        Gravatar email</small
      >
      <div className="form-group">
      <input type="text" placeholder="Date of birth" name="date" value={date} onChange={e => onChange(e)} required />
    </div>
    <div className="form-group">
      <input type="text" placeholder="Adress" name="adress" value={adress} onChange={e => onChange(e)} required />
    </div>
    </div>
    <div className="form-group">
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password} onChange={e => onChange(e)} required
        minLength="6"
      />
    </div>
    
    <input type="submit" className="btn btn-primary" value="Register" />
  </form>
  <p className="my-1">
    Already have an account? <a href="login.html">Sign In</a>
  </p>
  </Fragment>
};

export default Register
