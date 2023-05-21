import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import lottieAnimation from '../../assets/login.json'
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [error, setError] = useState("");

  const { singIn, googleSing, gitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
       
        navigate(from, { replace: true });

        const successMessage = "You have successfully logged in!";
        toast.success(successMessage);
         form.reset()
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          const errorMessage = "Invalid email or password. Please try again.";
          setError(errorMessage);
          toast.error(errorMessage);
        }
      });
  };


  const handleGoogleSingIn = async () => {
    try {
      await googleSing();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            {/* <img src={img} alt="" /> */}
            <Lottie animationData={lottieAnimation} loop={true} ></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
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
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>

              </form>

              <button onClick={handleGoogleSingIn}>Google</button>


              <p>New to Car Doctors <Link to="/register" className="text-orange-600 font-bold"> Sign Up </Link> </p>
              {/* <SocialLogin></SocialLogin> */}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;