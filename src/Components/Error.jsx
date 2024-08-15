import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import error from "../assets/404.jpg";

const Error = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${error})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Error !</title>
      </Helmet>
      <div className="text-center pt-16 space-y-3">
        <span className="text-5xl font-bold text-[#491112] ">Error </span>
        <span className="text-3xl font-medium text-[#491112]">
          Page not found
        </span>
        <p className="font-semibold text-lg text-[#491112]">
          Sorry, the page you are looking for doesnt exist.
        </p>
      </div>
      <div className="flex items-end justify-center min-h-[calc(100vh-165px)]">
        <Link to="/">
          <button className="btn btn-md  lg:btn-lg bg-[#491112] text-headD font-raleway text-base font-semibold hover:bg-[black] ">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
