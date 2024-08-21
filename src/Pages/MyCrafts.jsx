import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ReactStarsRating from "react-awesome-stars-rating";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/mail?email=${user.email}`;
  const [myCraft, setMyCraft] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyCraft(data));
  }, [url]);

  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-2",
        cancelButton: "btn btn-error mr-2",
      },
      buttonsStyling: false,
    });
    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure want to Delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/all/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        if (data.deletedCount > 0) {
          setMyCraft((prevCrafts) =>
            prevCrafts.filter((item) => item._id !== id)
          );
          swalWithBootstrapButtons.fire({
            title: "Successfully!",
            text: "Your item has been deleted.",
            icon: "success",
            timer: 2000,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the item.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error delete item:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while delete the item.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your item delete was cancelled.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Helmet>
          <title>CraftyHub | My Items</title>
        </Helmet>
        <div className="about-us bg-base-300 dark:bg-neutral-700 py-5">
          <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
            MY ART & CRAFTS
          </h1>
          <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
            Home/MY-ART&CRAFT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-10">
          {myCraft.map((a) => (
            <div
              key={a._id}
              className="card dark:bg-backL bg-backD shadow-md shadow-butL dark:shadow-butD dark:text-headL text-headD"
            >
              <figure>
                <img src={a.photo} className="w-full h-[200px] p-2" />
              </figure>
              <div className="card-body font-raleway">
                <h2 className="card-title">
                  {a.item}
                  <div
                    className={`badge ${
                      a.inStock === "InStock"
                        ? "bg-[#4CAF50] dark:bg-[#8BC34A] text-xs text-headL dark:text-headD"
                        : a.inStock === "Made to order"
                        ? "bg-[#FF4C4C]  text-xs text-headL dark:text-headD"
                        : "bg-gray-300 text-black"
                    } p-2 rounded-lg`}
                  >
                    {a.inStock === "InStock"
                      ? "Available"
                      : a.inStock === "Made to order"
                      ? "Made to Order"
                      : "Out of Stock"}
                  </div>
                </h2>
                <p className="text-sm">
                  Customization Available :{" "}
                  <span className="text-xs text-headD dark:text-headL font-merri font-bold">
                    {a.customization}
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
                  <div className="badge badge-outline dark:text-headL text-headD bg-linL dark:bg-linD">
                    ${a.price}
                  </div>
                </div>
                <div className="flex gap-5 justify-center items-center mt-5">
                  {" "}
                  <Link to={`/update/${a._id}`}>
                    <button className="btn  bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-xs font-bold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD transform transition-transform duration-500 ease-in-out hover:scale-110">
                      Update Item
                    </button>
                  </Link>
                  <Link onClick={() => handleDelete(a._id)}>
                    <button className="btn  bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-xs font-bold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD transform transition-transform duration-500 ease-in-out hover:scale-110">
                      Delete Item
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCrafts;
