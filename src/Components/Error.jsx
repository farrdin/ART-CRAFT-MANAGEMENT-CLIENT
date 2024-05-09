import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col gap-6 items-center justify-center min-h-screen bg-gray-300"
    >
      <h1 className="text-7xl">Oops!</h1>
      <p>
        404 Not Found: The requested URL was not found on this server. Please
        check the URL and try again.
      </p>

      <button className="btn">
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
}
