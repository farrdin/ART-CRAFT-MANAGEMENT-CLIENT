import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";

const CraftItem = () => {
  const [items, setItems] = useState([]);
  const url = "http://localhost:5000/all";
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-xl lg:text-3xl text-headL dark:text-headD text-center font-raleway mb-2">
          Explore The Collection
        </h1>
        <p className="text-xs text-headL dark:text-headD text-center font-raleway lg:w-[40%] mx-auto">
          Handpicked Supplies and Tools to Ignite Your Creativity,Discover
          Unique Crafts and Create Something Extraordinary
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.slice(0, 9).map((i) => (
          <div
            key={i._id}
            className="card dark:bg-backL bg-backD  w- shadow-md shadow-butL dark:shadow-butD dark:text-headL text-headD"
          >
            <figure>
              <img src={i.photo} className="w-full h-[200px] p-2" />
            </figure>
            <div className="card-body font-raleway">
              <h2 className="card-title">
                {i.item}
                <div
                  className={`badge ${
                    i.inStock === "InStock"
                      ? "bg-[#4CAF50] dark:bg-[#8BC34A] text-xs text-headL dark:text-headD"
                      : i.inStock === "Made to order"
                      ? "bg-[#FF4C4C]  text-xs text-headL dark:text-headD"
                      : "bg-gray-300 text-black"
                  } p-2 rounded-lg`}
                >
                  {i.inStock === "InStock"
                    ? "Available"
                    : i.inStock === "Made to order"
                    ? "Made to Order"
                    : "Out of Stock"}
                </div>
              </h2>
              <p className="text-sm">#{i.category}</p>
              <div className="card-actions justify-between items-center">
                <Link
                  to={`/details/${i._id}`}
                  className="py-1 px-3 rounded-lg bg-neutral-700 dark:bg-neutral-300 transition-all duration-300 text-headD dark:text-headL font-raleway text-base font-semibold hover:bg-butL dark:hover:bg-butD "
                >
                  Details
                </Link>
                <div className="card-actions justify-end">
                  <div>
                    <ReactStarsRating
                      isHalf={true}
                      isEdit={false}
                      size="15"
                      primaryColor="gold"
                      secondaryColor="gray"
                      className="flex"
                      value={i.rating}
                    />
                  </div>
                  <div className="badge badge-outline dark:text-headL text-headD bg-linL dark:bg-linD">
                    ${i.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full my-10 text-center">
        <Link
          to="all"
          className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-base font-semibold hover:bg-butD dark:hover:bg-butL hover:text-headL dark:hover:text-headD"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default CraftItem;
