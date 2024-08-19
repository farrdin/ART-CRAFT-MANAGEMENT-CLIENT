import { useEffect, useState } from "react";

const CraftItem = () => {
  const [items, setItems] = useState([]);
  const url = "http://localhost:5000/all";
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map((i) => (
        <div key={i._id} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={i.photo} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {i.item}
              <div className="badge badge-secondary">{i.inStock}</div>
              <div className="badge badge-secondary">${i.price}</div>
            </h2>
            <p>{i.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{i.rating}</div>
              <div className="badge badge-outline">{i.customization}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CraftItem;
