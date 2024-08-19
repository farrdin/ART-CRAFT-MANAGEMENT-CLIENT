import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updatePassword, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const {
    user,
    name,
    setName,
    photoURL,
    setPhotoURL,
    newPassword,
    setNewPassword,
  } = useContext(AuthContext);
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (newPassword) {
      if (newPassword.length < 6) {
        toast.error("You must enter 6 characters or more", {
          theme: "colored",
        });
        return;
      } else if (!/[A-Z]/.test(newPassword)) {
        toast.error("You must add one uppercase character", {
          theme: "colored",
        });
        return;
      } else if (!/[a-z]/.test(newPassword)) {
        toast.error("You must add one lowercase character", {
          theme: "colored",
        });
        return;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
        toast.error("You must add one special character", {
          theme: "colored",
        });
        return;
      }
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      if (newPassword) {
        await updatePassword(user, newPassword);

        Swal.fire({
          title: "Congratulations!",
          text: "Profile updated successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Congratulations!",
          text: "Profile updated successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error("Failed to update profile. Please try again.");
    }
  };
  if (!user) {
    return (
      <span className="loading loading-spinner loading-lg text-secondary mx-auto flex items-center justify-center"></span>
    );
  }

  return (
    <div>
      <div className="bg-base-200 my-10 rounded-2xl p-8 ">
        <Helmet>
          <title>CraftyHub | UpdateProfile</title>
        </Helmet>

        <div className="w-full md:flex">
          <div className="md:w-1/2 mb-5 flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl font-bold text-[#4F5CC1] text-center">
              Update Profile
            </h1>
          </div>
          <div className="w-full max-w-sm shadow-2xl bg-base-100 rounded-2xl mx-auto md:mx-0">
            <form onSubmit={handleSaveChanges} className="card-body">
              <div className="form-control">
                <label htmlFor="name">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Update  Your Name"
                  className="input input-bordered"
                />
                <label htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  disabled
                  type="email"
                  id="email"
                  value={user.email.replace(/(?<=.{1}).*(?=@)/, "******")}
                  className="input input-bordered"
                />
                <label htmlFor="photoURL">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Update Your Photo"
                  className="input input-bordered"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  required
                />
              </div>
              <div className="form-control relative">
                <label htmlFor="newPassword">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Update Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn border-[5px] shadow-md">
                  Save Changes
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
