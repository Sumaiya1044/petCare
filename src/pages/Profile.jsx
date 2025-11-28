import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile as firebaseUpdateProfile } from "firebase/auth";

const Profile = () => {
  const { user, setUser, auth } = useContext(AuthContext); // auth এখানে আছে
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoUrl] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoUrl(user.photoUrl || "");
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    firebaseUpdateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    })
      .then(() => {
        setUser({ ...auth.currentUser }); // context update
        alert("Profile updated successfully!");
        setEditing(false);
      })
      .catch((err) => alert(err.message));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={user.photoURL} alt="Profile" />
        </div>
      </div>
      <h2 className="mt-4 text-lg font-bold">{user.displayName}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>

      <button
        onClick={() => setEditing(!editing)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {editing ? "Cancel" : "Update Profile"}
      </button>

      {editing && (
        <form
          onSubmit={handleUpdateProfile}
          className="mt-4 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
