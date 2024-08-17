import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
const Register = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-[85%] mx-auto py-10">
        <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-backL dark:bg-backD text-headL dark:text-paraD font-raleway ">
          <h2 className="mb-3 text-3xl font-semibold text-center text-headL dark:text-headD">
            Create your account
          </h2>
          <p className="text-sm text-center dark:text-gray-600 mb-10">
            Already have account?
            <Link
              to="/register"
              className="hover:underline text-linL dark:text-linD"
            >
              Sign in
            </Link>
          </p>

          <form noValidate="" action="" className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm text-headL dark:text-headD"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
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
                  htmlFor="photo"
                  className="block text-sm text-headL dark:text-headD"
                >
                  Photo Url
                </label>
                <input
                  type="photo"
                  name="photo"
                  id="photo"
                  placeholder="URL"
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
            <button
              type="button"
              className="btn bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL w-full px-8 py-3 font-semibold rounded-md  dark:bg-violet-600 dark:text-gray-50  "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
