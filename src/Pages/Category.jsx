import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all", {
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
      <h1 className="text-3xl font-bold mb-4">{id} Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <div
            key={i._id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src={i.photo}
              alt={i.item}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{i.item}</h3>
            <p className="text-gray-600">{i.description}</p>
            <p className="font-bold">${i.price}</p>
            <p className="text-yellow-500">Rating: {i.rating}</p>
            <p>Processing Time: {i.time} days</p>
            <a href={`/details/${i._id}`} className="btn mt-2">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
