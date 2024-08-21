import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllCrafts = () => {
  const [items, setItems] = useState([]);
  const url = "http://localhost:5000/all";
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  return (
    <div>
      <Helmet>
        <title>CraftyHub | All Items</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Photo</th>
              <th>Item Name</th>
              <th>Subcategory</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr key={a._id} className="text-center">
                <td>
                  <img
                    src={a.photo}
                    alt="Book Cover"
                    className="w-16 h-16 object-cover"
                  />
                </td>

                <td>{a.item}</td>
                <td>{a.category}</td>
                <td>{a.rating}</td>
                <td>
                  <Link to={`/details/${a._id}`}>
                    <button type="button">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ei page user ra ki ki add korse data base e eigula show korbe 3-4 ta information show korbe table e and view details button thakbe click 		korle view details page e redirect korbe. */}
    </div>
  );
};

export default AllCrafts;
