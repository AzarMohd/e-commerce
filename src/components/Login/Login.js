import React from 'react';
import "./style.css";


const Login = () => {
  return (
      <div className=' header container mb-1'>
          <img src="./assets/login.jpg" alt="login" width="300px" height="150px" className="img-fluid"></img>
<form className='body'>
    <h3 >Sign In</h3>
    <div className="col-md-7 big">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="col-md-7 big">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>
    <div className="col-md-7 big ">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>
    <button type="submit" className="btn btn-primary big btn-block">Submit</button>
    <p className="big forgot-password text-right ">
        Forgot <a href="#">password?</a>
    </p>
        
</form>
      </div>
  )
}

export default Login