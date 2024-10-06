import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const AllCrafts = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const url = "https://prb9-a10.vercel.app/all";
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Helmet>
        <title>CraftyHub | All Items</title>
      </Helmet>
      <div className="bg-base-300 dark:bg-neutral-700 py-5">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg text-paraL dark:text-paraD font-raleway font-semibold">
              ART & CRAFT ITEMS
            </h1>
            <p className="text-xs text-paraL dark:text-paraD font-raleway font-extralight">
              Home/ART & CRAFT ITEMS
            </p>
          </div>
          {/* //? Search Input Added*/}
          <div>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search by item name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-butL dark:border-butD rounded-full focus:ring-2 focus:ring-butD focus:border-butL bg-white dark:bg-neutral-800 text-sm text-paraL dark:text-paraD placeholder-gray-500 dark:placeholder-gray-400 transition duration-200 ease-in-out"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
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
            {filteredItems.length > 0 ? (
              filteredItems.map((a) => (
                <tr
                  key={a._id}
                  className="text-center text-headL dark:text-headD text-sm font-raleway font-light"
                >
                  <td>
                    <img
                      src={a.photo}
                      alt={a.item}
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
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-paraL dark:text-paraD"
                >
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCrafts;
