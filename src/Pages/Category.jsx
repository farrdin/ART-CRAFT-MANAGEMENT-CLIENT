import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const Category = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://prb9-a10.vercel.app/all", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((product) => product.category === id);
        setItems(filtered);
      });
  }, [id]);

  return (
    <div>
      <Helmet>
        <title>CraftyHub | {id}</title>
      </Helmet>
      <div className="bg-base-300 dark:bg-neutral-700 py-5">
        <div className="w-[80%] mx-auto flex justify-between">
          <div>
            <h1 className="text-lg text-paraL dark:text-paraD font-raleway font-semibold">
              MY ART & CRAFTS
            </h1>
            <p className="text-xs text-paraL dark:text-paraD font-raleway font-extralight">
              Home/MY-ART&CRAFT
            </p>
          </div>
          <div>
            <h1 className="text-lg text-paraL dark:text-paraD font-raleway font-semibold">
              CATEGORY :
            </h1>
            <p className="text-xs text-paraL dark:text-paraD font-raleway font-extralight">
              #{id}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-10">
        {items.map((a) => (
          <div
            key={a._id}
            className="card dark:bg-backL bg-backD shadow-md shadow-butL dark:shadow-butD dark:text-headL text-headD"
          >
            <figure>
              <img src={a.photo} className="w-full h-[200px] p-2" />
            </figure>
            <div className="card-body font-raleway">
              <h2 className="card-title">{a.item}</h2>
              <p className="text-sm font-semibold">
                Category :{" "}
                <span className="text-xs text-headD dark:text-headL font-merri font-thin">
                  {a.category}
                </span>
              </p>
              <p className="text-sm font-semibold">
                Description :{" "}
                <span className="text-xs text-headD dark:text-headL font-raleway font-thin">
                  {a.description.split(" ").slice(0, 20).join(" ") +
                    (a.description.split(" ").length > 20 ? "...." : "")}
                </span>
              </p>
              <div className="card-actions justify-end">
                <div>
                  <ReactStarsRating
                    isHalf={true}
                    isEdit={false}
                    size="15"
                    primaryColor="gold"
                    secondaryColor="gray"
                    className="flex"
                    value={a.rating}
                  />
                </div>
                <div className="badge badge-outline dark:text-headL text-headD bg-linL dark:bg-linD font-merri">
                  ${a.price}
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center mt-5">
                <Link to={`/details/${a._id}`}>
                  <button className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-xs font-bold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD transform transition-transform duration-500 ease-in-out hover:scale-110">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
