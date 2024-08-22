import Swal from "sweetalert2";
import bg from "../assets/bg.jpg";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Lottie from "lottie-react";
import welcome from "../../public/update.json";

const AddCrafts = () => {
  const { user } = useContext(AuthContext);
  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const item = form.item.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const inStock = form.inStock.value;

    const addItems = {
      user: name,
      email: email,
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-2",
        cancelButton: "btn btn-error mr-2",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure want to Add this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch("http://localhost:5000/all", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(addItems),
        });
        const data = await response.json();
        if (data.insertedId) {
          form.reset();
          document.getElementById("category").value = "default";
          swalWithBootstrapButtons.fire({
            title: "Successfully!",
            text: "Your item has been added.",
            icon: "success",
            timer: 2000,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add the item.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error adding item:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the item.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your item addition was cancelled.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <Helmet>
        <title>CraftyHub | Add Item</title>
      </Helmet>
      <div className="bg-base-300 dark:bg-neutral-700 py-5">
        <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
          ADD ITEMS
        </h1>
        <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
          Home/ADD
        </p>
      </div>
      <div className="md:flex justify-around p-5">
        <Lottie loop={true} animationData={welcome} style={{ width: 450 }} />
        <div className="md:w-[50%]">
          <div className="w-[80%] mx-auto p-4 rounded-md shadow shadow-butL dark:shadow-butD sm:p-8 bg-backL bg-opacity-20 dark:bg-backD dark:bg-opacity-65 text-headL dark:text-paraD font-raleway">
            <form onSubmit={handleAdd} className="space-y-8">
              <div className="space-y-4">
                <div className="flex  gap-10">
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      User Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      placeholder="User"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Email address
                    </label>
                    <input
                      defaultValue={user.email}
                      disabled
                      type="email"
                      name="email"
                      id="email"
                      placeholder="*******@email.com"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="space-y-2 w-1/2">
                    <label
                      htmlFor="item"
                      className="block text-sm text-headL dark:text-headD"
                    >
                      Item Name
                    </label>
                    <input
                      required
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
                      required
                      name="category"
                      id="category"
                      className="select select-bordered w-full px-3 py-2 border rounded-md dark:border-gray-300 bg-backL dark:bg-backD text-headL dark:text-headD  focus:dark:border-violet-600"
                    >
                      <option value="default" disabled selected>
                        Pick one
                      </option>
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
                      required
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
                      required
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
                      required
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
                          required
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
                          required
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
                          required
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
                          required
                          type="radio"
                          name="inStock"
                          value="Made to order"
                          className="radio checked:bg-[red] dark:checked:bg-[red]"
                        />
                        <span className="label-text ml-2">Made to order</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL w-full px-8 py-3 font-semibold rounded-md  dark:bg-violet-600 dark:text-gray-50  ">
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCrafts;
