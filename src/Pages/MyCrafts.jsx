import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Photo</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Customization</th>
              <th>stockStatus</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myCraft.map((a) => (
              <tr key={a._id} className="text-center">
                <td>
                  <img
                    src={a.photo}
                    alt="Book Cover"
                    className="w-16 h-16 object-cover"
                  />
                </td>

                <td>{a.item}</td>
                <td>{a.price}</td>
                <td>{a.rating}</td>
                <td>{a.customization}</td>
                <td>{a.inStock}</td>
                <td>
                  <Link to={`/update/${a._id}`}>
                    <button type="button">update</button>
                  </Link>
                </td>
                <td>
                  <Link onClick={() => handleDelete(a._id)}>
                    <button type="button">delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCrafts;
