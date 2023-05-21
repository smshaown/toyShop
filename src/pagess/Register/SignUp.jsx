import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import lottieAnimation from '../../assets/login.json'
import { AuthContext } from '../../provider/AuthProvider';


const SignUp = () => {



  const {user, createUser} = useContext(AuthContext);
  const [error, setError] = useState('')


   const navigate = useNavigate();
   const location = useLocation();
   console.log(location)

const from = location.state?.from?.pathname || "/";



  const handleSingUp = event => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const photo = form.photo.value;
      const name = form.name.value;
      
      // const confirm = form.confirm.value;
      console.log(email, password, name)

      setError('');
      if(!/(?=.{6,}$)/.test(password)) {
          setError('Password must be 6 characters or longer');
          return;
        } else if (!/(?=.*[a-z])/g.test(password)) {
          setError('Your password must contain at least one letter.');
          return;
        } else if (!/(?=.*[A-Z])/g.test(password)) {
          setError('Your password must contain at least one upper case');
          return;
        } else if (!/(?=.*\d)/g.test(password)) {
          setError('Your password must contain at least one digit');
          return;
        }

        createUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUser(result.user, name, photo)
          navigate(from, { replace: true });
          form.reset();
        })
        .catch(error => {
          console.log(error)
        })

  }

  const updateUser = (user, name, photo) => {
      updateProfile(user, {
          displayName: name,
          photoURL: photo
      })
      .then(() => {})
      .catch(error => {
          console.error(error)
      })
  }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            {/* <img src={img} alt="" /> */}
            <Lottie animationData={lottieAnimation} loop={true} ></Lottie>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign Up </h1>
              <form   onSubmit={handleSingUp}>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Please Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Please Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                 
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photo"                  
                    className="input input-bordered"
                    id="" 
                    placeholder="Type your Photo link"
                    required
                  />
                 
                </div>


                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>

                <p className='text-center text-red-400'>{error}</p>

              </form>
              <p>
               Already Have an Account{" "}
                <Link to="/login" className="text-orange-600 font-bold">
                  {" "}
                  Login{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default SignUp;