import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllCrafts = () => {
  const [items, setItems] = useState([]);
  const url =
    "https://prb9-a10-server-92i7kdtxt-fardin-ahmed-alifs-projects.vercel.app/all";
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
      <div className="bg-base-300 dark:bg-neutral-700 py-5">
        <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
          ART & CRAFT ITEMS
        </h1>
        <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
          Home/ART & CRAFT ITEMS
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center text-headL dark:text-headD text-base font-merri font-light ">
              <th className="text-start">Photo</th>
              <th>Item Name</th>
              <th>Subcategory</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr
                key={a._id}
                className="text-center text-headL dark:text-headD text-sm font-raleway font-light"
              >
                <td>
                  <img
                    src={a.photo}
                    alt="Book Cover"
                    className="w-20 h-20 object-cover"
                  />
                </td>

                <td>{a.item}</td>
                <td>{a.category}</td>
                <td>{a.rating}</td>
                <td>
                  <Link to={`/details/${a._id}`}>
                    <button className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-xs font-extrabold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD transform transition-transform duration-500 ease-in-out hover:scale-110 ">
                      View Details
                    </button>
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
