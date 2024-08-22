import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updatePassword, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import bg from "../assets/bg.jpg";
import Lottie from "lottie-react";
import profile from "../../public/profile.json";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <span className="loading loading-spinner loading-lg text-butL dark:text-butD mx-auto flex items-center justify-center"></span>
    );
  }
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <Helmet>
        <title>CraftyHub | Profile</title>
      </Helmet>
      <div className=" bg-base-300 dark:bg-neutral-700 py-5">
        <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
          PROFILE
        </h1>
        <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
          Home/PROFILE
        </p>
      </div>

      <div className="p-5 md:flex justify-around">
        <Lottie
          loop={true}
          animationData={profile}
          className="w-full md:w-[40%]"
        />
        <div className="md:w-[30%] shadow-xl shadow-butL dark:shadow-butD bg-backL dark:bg-backD  rounded-2xl ">
          <div className="flex justify-center items-center pt-10">
            <img src={photoURL} className="w-[100px] h-[100px] rounded-full" />
          </div>
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
                type="password"
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
  );
};

export default Profile;
