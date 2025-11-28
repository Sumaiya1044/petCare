import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => setMessage("Password reset email sent! Check your inbox."))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/bV62p7L/6ebe9a0a21ade3ca5b22b9ab77d716fd.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)", // dim effect
        }}
      ></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="card bg-white bg-opacity-90 backdrop-blur-md shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Reset Your Password</h2>
          
          {message && <p className="text-green-500 mb-2">{message}</p>}
          {error && <p className="text-red-500 mb-2">{error}</p>}
          
          <input
            type="email"
            placeholder="Email"
            className="input w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <button
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full"
            onClick={handleReset}
          >
            Reset password
          </button>
        </div>
      </div>

    </div>
  );
};

export default ForgetPassword;
