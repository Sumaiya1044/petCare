import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Resister = () => {
  const { registerWithEmailPassword, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ✅ PASSWORD REGEX VALIDATION
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain:\n- At least one uppercase letter\n- At least one lowercase letter\n- At least 6 characters"
      );
      return;
    }

    registerWithEmailPassword(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(auth.currentUser);
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/4f1MZk7/your-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 opacity-60"></div>

      <div className="relative z-10 w-full max-w-sm">
        <div className="card bg-white bg-opacity-90 backdrop-blur-md shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
              Sign Up Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full"
                  required
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  name="photoUrl"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  required
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  required
                  placeholder="Password"
                />
              </div>

              <div className="mt-2 text-center">
                <span>Already have an account? </span>
                <Link
                  to="/login"
                  className="link link-hover font-semibold text-blue-500"
                >
                  Login
                </Link>
              </div>

              <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white mt-4 w-full">
                Register
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
