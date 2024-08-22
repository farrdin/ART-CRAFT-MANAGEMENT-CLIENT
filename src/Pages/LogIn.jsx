import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import login from "../../public/login.json";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Signed In  Successfully!",
          icon: "success",
          timer: 2000,
        });
        e.target.reset();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid Email or Password", { theme: "colored" });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Google Signed In  Successfully with!",
          icon: "success",
          timer: 2000,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitHubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Github Signed In  Successfully with!",
          icon: "success",
          timer: 2000,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <Helmet>
        <title>CraftyHub | Log In</title>
      </Helmet>
      <div className="bg-base-300 dark:bg-neutral-700 py-5">
        <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
          PLEASE LOG IN
        </h1>
        <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
          Home/LOGIN
        </p>
      </div>
      <div className="md:flex justify-around p-5">
        <Lottie loop={true} animationData={login} style={{ width: 450 }} />
        <div className="md:w-[40%]">
          <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-backL dark:bg-backD text-headL dark:text-paraD font-raleway ">
            <p className="text-sm text-center dark:text-gray-600">
              Dont have account?
              <Link
                to="/register"
                className="hover:underline text-linL dark:text-linD"
              >
                Sign up here
              </Link>
            </p>
            <div className="my-6 space-y-4">
              <button
                aria-label="Login with Google"
                onClick={handleGoogleLogin}
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600  bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL  "
              >
                <FaGoogle className="text-2xl text-[#E34032]" />
                <p>Login with Google</p>
              </button>
              <button
                onClick={handleGitHubLogin}
                aria-label="Login with GitHub"
                role="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600  bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL"
              >
                <FaGithub className="text-2xl text-secondary" />
                <p>Login with GitHub</p>
              </button>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600">OR</p>
              <hr className="w-full dark:text-gray-600" />
            </div>
            <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm text-headL dark:text-headD"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="*******@email.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm ext-headL dark:text-headD"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <button className="btn bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL w-full px-8 py-3 font-semibold rounded-md  dark:bg-violet-600 dark:text-gray-50  ">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
