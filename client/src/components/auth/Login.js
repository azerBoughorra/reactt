import React, { useState } from 'react'
import { loginUser } from '../../actions/authActions';
import { createStore } from 'redux';
import authReducer from '../../reducers/authReducer';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { selectErrors } from '../../redux-selectors/error.selector';
import { selectAuthInformation } from '../../redux-selectors/auth.selector';
import { Link } from 'react-router-dom';

const Login = (props) => {

  //Redux
  const dispatch = useDispatch();
  const authInformation = useSelector(selectAuthInformation)
  const error = useSelector(selectErrors)





  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    console.log('test', formData);


    loginUser(formData)(dispatch);

  }
  if (!authInformation.isAuthenticated) {
    return <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      {error ? Object.keys(error).map(k =>
        (<div className="alert alert-danger" role="alert">
          {error[k]}
        </div>)) : null
      }
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
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>

    </section>
  } else {
    props.history.push("/")
    return null
  }

}

export default Login