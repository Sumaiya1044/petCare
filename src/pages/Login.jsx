import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { auth } from "../firebase/firebase.config";
import { motion } from "framer-motion";

const Login = () => {
  const { setUser, handleGoogleSignin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => setUser(userCredential.user))
      .catch((error) => setErrorMessage(error.message));
  };

  const googleSignin = () => {
    handleGoogleSignin()
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      
      {/* Motion background image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.ibb.co./Kp32MXdL/fe77259222dc21a082ddb5058d452c91.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)", // dim effect
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 0.5 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="card bg-white bg-opacity-90 backdrop-blur-md shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-12"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}

              <button type="submit" className="btn bg-purple-600 hover:bg-purple-700 text-white w-full">
                Login
              </button>

              <button
                type="button"
                onClick={googleSignin}
                className="btn btn-outline btn-pink-500 w-full mt-2"
              >
                Continue with Google
              </button>

              <div className="text-center mt-3">
                <Link to="/forget-password" className="link font-semibold text-blue-500 hover:text-blue-800">
                  Forgot Password?
                </Link>
              </div>

              <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link to="/signup" className="link font-semibold text-purple-700 hover:text-purple-900">
                  Sign up
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
