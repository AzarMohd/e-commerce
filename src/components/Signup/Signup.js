import React from 'react';


const Signup = () => {
  return (
    <div className='header container mb-1 text-'>
    <img src="./assets/signup.jpg" alt="sign" width="300px" height="100px" class="img-fluid"></img>
    <form className='body container '>
                
                <h3 >Sign Up</h3>
                <div className="col-md-4 big1 ">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col-md-4 big1 ">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="col-md-4 big1 ">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="col-md-4 big1 ">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn big1 btn-primary btn-block">Sign Up</button>
                <p className=" big1 forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
  )
}

export default Signup