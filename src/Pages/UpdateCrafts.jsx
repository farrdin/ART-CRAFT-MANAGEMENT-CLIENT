import { useLocation, useNavigate, useParams } from "react-router-dom";
import bg from "../assets/bg.jpg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import update from "../../public/update.json";

const UpdateCrafts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [upItems, setUpItems] = useState(null);
  const url = "https://prb9-a10.vercel.app/all";

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const a = data.find((b) => b._id === id);
        setUpItems(a || {});
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const item = form.item.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const inStock = form.inStock.value;

    const updateItems = {
      item: item,
      category: category,
      photo: photo,
      price: price,
      rating: rating,
      time: time,
      description: description,
      customization: customization,
      inStock: inStock,
    };
    fetch(`https://prb9-a10.vercel.app/all/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated Successfully!",
            text: "You clicked the button!",
            icon: "success",
            timer: 4000,
          });
          setTimeout(() => {
            navigate(location?.state ? location.state : "/all");
          }, 1500);
        } else {
          toast.error("Failed to update the item.");
        }
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        toast.error("An error occurred while updating the item.");
      });
  };

  if (upItems === null) {
    return (
      <span className="loading loading-spinner loading-lg text-secondary mx-auto flex items-center justify-center"></span>
    );
  }
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <Helmet>
        <title>CraftyHub | Update Items</title>
      </Helmet>
      <div className=" bg-base-300 dark:bg-neutral-700 py-5">
        <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
          UPDATE ITEMS
        </h1>
        <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
          Home/UPDATE
        </p>
      </div>
      <div className="md:flex justify-around p-5">
        <Lottie
          loop={true}
          animationData={update}
          className="w-full md:w-[50%]"
        />
        <div className="w-full md:w-[50%]">
          <div className="p-8 h-full rounded-md shadow shadow-butL dark:shadow-butD  bg-backL bg-opacity-20 dark:bg-backD dark:bg-opacity-65 text-headL dark:text-paraD font-raleway">
            <form onSubmit={handleUpdate} className="space-y-8">
              <div className="space-y-4">
                <div className="flex gap-10">
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="item"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Item Name
                    </label>
                    <input
                      defaultValue={upItems.item || ""}
                      type="text"
                      name="item"
                      id="item"
                      placeholder="Item Name"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="category"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Subcategory Name
                    </label>
                    <select
                      defaultValue={upItems.category}
                      name="category"
                      id="category"
                      className="select select-bordered w-full px-3 py-2 border rounded-md dark:border-gray-300 bg-backL dark:bg-backD text-headL dark:text-headD  focus:dark:border-violet-600"
                    >
                      <option disabled>Pick one</option>
                      <option value="Landscape Painting">
                        Landscape Painting
                      </option>
                      <option value="Portrait Drawing">Portrait Drawing</option>
                      <option value="Watercolour Painting">
                        Watercolour Painting
                      </option>
                      <option value="Oil Painting">Oil Painting</option>
                      <option value="Charcoal Sketching">
                        Charcoal Sketching
                      </option>
                      <option value="Cartoon Drawing">Cartoon Drawing</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="photo"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Image URL
                    </label>
                    <input
                      defaultValue={upItems.photo || ""}
                      type="text"
                      name="photo"
                      id="photo"
                      placeholder="Image URL"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="price"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      $Price
                    </label>
                    <input
                      defaultValue={upItems.price || ""}
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="rating"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Rating
                    </label>
                    <input
                      defaultValue={upItems.rating || ""}
                      required
                      max={5}
                      min={0}
                      step={0.1}
                      type="number"
                      name="rating"
                      id="rating"
                      placeholder="1 to 5"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="time"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Processing Time(day)
                    </label>
                    <input
                      defaultValue={upItems.time || ""}
                      type="number"
                      name="time"
                      id="time"
                      placeholder="Days"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="text-sm">
                    Description
                  </label>
                  <textarea
                    defaultValue={upItems.description || ""}
                    required
                    name="description"
                    id="description"
                    type="text"
                    placeholder="Description"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <label className="label cursor-pointer">
                      <span className="label-text">Customization</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          defaultValue={upItems.customization || ""}
                          type="radio"
                          name="customization"
                          value="yes"
                          className="radio checked:bg-butL dark:checked:bg-butD"
                          defaultChecked
                        />
                        <span className="label-text ml-2">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          defaultValue={upItems.customization || ""}
                          type="radio"
                          name="customization"
                          value="no"
                          className="radio checked:bg-[red] dark:checked:bg-[red]"
                        />
                        <span className="label-text ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="w-1/2">
                    <label className="label cursor-pointer">
                      <span className="label-text">In Stock</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          defaultValue={upItems.inStock || ""}
                          type="radio"
                          name="inStock"
                          value="InStock"
                          className="radio  checked:bg-butL dark:checked:bg-butD"
                          defaultChecked
                        />
                        <span className="label-text ml-2">InStock</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          defaultValue={upItems.inStock || ""}
                          type="radio"
                          name="inStock"
                          value="Made to order"
                          className="radio checked:bg-[red] dark:checked:bg-[red]"
                        />
                        <span className="label-text ml-2">Made to Order</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL w-full px-8 py-3 font-semibold rounded-md  dark:bg-violet-600 dark:text-gray-50  ">
                Update Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCrafts;
