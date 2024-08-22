import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import ReactStarsRating from "react-awesome-stars-rating";

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
  console.log(details);
  return (
    <div>
      <Helmet>
        <title>CraftyHub | Details</title>
      </Helmet>
      <div>
        <div className="bg-base-300 dark:bg-neutral-600 py-5">
          <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
            Details of {details.item}
          </h1>
          <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
            Home/DETAILS
          </p>
        </div>
        <div className="md:flex  gap-5 bg-backL dark:bg-backD border-y border-butL dark:border-butD">
          <div className="left md:w-[35%] h-[350px] md:sticky top-0">
            <img src={details.photo} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-[65%] md:flex gap-5 Right">
            <div className="space-y-5 md:w-3/5 py-5">
              <h1 className="text-lg text-headL dark:text-headD font-merri font-semibold">
                {details.item}
              </h1>
              <p className="text-sm text-paraL dark:text-paraD font-raleway font-light">
                {details.description}
              </p>
            </div>
            <div className="space-y-3 md:w-2/5 py-5 md:mt-12">
              <p className="flex gap-2 items-center text-base text-paraL dark:text-paraD font-raleway font-semibold ">
                Rating :
                <ReactStarsRating
                  isHalf={true}
                  isEdit={false}
                  size="15"
                  primaryColor="gold"
                  secondaryColor="gray"
                  className="flex"
                  value={details.rating}
                />
              </p>
              <p className="text-base text-paraL dark:text-paraD font-raleway font-semibold ">
                Categoty :{" "}
                <span className="text-base text-headL dark:text-headD font-raleway font-light">
                  {details.category}
                </span>
              </p>
              <p className="text-base text-paraL dark:text-paraD font-raleway font-semibold ">
                Time to Process :{" "}
                <span className="text-base text-headL dark:text-headD font-raleway font-light">
                  {details.time} days
                </span>
              </p>
              <p className="text-base text-paraL dark:text-paraD font-raleway font-semibold ">
                Available Stock :{" "}
                <span className="text-base text-headL dark:text-headD font-raleway font-light">
                  {details.inStock}
                </span>
              </p>
              <p className="text-base text-paraL dark:text-paraD font-raleway font-semibold ">
                Availabe to Customize :{" "}
                <span className="text-base text-headL dark:text-headD font-raleway font-light">
                  {details.customization}
                </span>
              </p>
              <p className="text-base text-paraL dark:text-paraD font-raleway font-semibold ">
                Price :{" "}
                <span className="text-base text-headL dark:text-headD font-raleway font-light">
                  ${details.price}
                </span>
              </p>
              <div>
                {canEdit && (
                  <Link to={`/update/${details._id}`}>
                    <button className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-base font-semibold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD  transform transition-transform duration-500 ease-in-out hover:scale-90">
                      Update Item
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
