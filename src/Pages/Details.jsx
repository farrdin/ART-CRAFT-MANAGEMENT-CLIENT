import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const url = "http://localhost:5000/all";

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const items = data.find((i) => i._id === id);
        setDetails(items);
      });
  }, [id]);

  const canEdit = user && details.email && user.email === details.email;

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <tbody>
          <tr key={details._id} className="text-center">
            <td>
              <img
                src={details.photo}
                alt="Book Cover"
                className="w-16 h-16 object-cover"
              />
            </td>

            <td>{details.item}</td>
            <td>{details.category}</td>
            <td>{details.rating}</td>
            <td>
              {canEdit && (
                <Link to={`/update/${details._id}`}>
                  <button type="button" className="btn btn-primary">
                    Update Item
                  </button>
                </Link>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
