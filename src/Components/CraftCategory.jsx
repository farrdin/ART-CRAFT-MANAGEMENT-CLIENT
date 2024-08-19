import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import landscape from "../assets/category/landscape.jpg";
import portrait from "../assets/category/portrait.jpg";
import watercolor from "../assets/category/watercolor.jpg";
import oil from "../assets/category/oil.jpg";
import charcoal from "../assets/category/charcoal.jpg";
import cartoon from "../assets/category/cartoon.jpg";

const CraftCategory = () => {
  const [categories, setCategories] = useState([]);

  const photos = {
    "Landscape Painting": landscape,
    "Portrait Drawing": portrait,
    "Watercolour Painting": watercolor,
    "Oil Painting": oil,
    "Charcoal Sketching": charcoal,
    "Cartoon Drawing": cartoon,
  };

  useEffect(() => {
    fetch("http://localhost:5000/all", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const unique = [...new Set(data.map((c) => c.category))];
        setCategories(unique);
      });
  }, []);
  return (
    <div id="category">
      <h1 className="text-5xl font-raleway font-semibold text-butL dark:text-butD mb-10 text-center">
        Select your Fav Categories
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {categories.map((c) => (
          <div key={c} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={photos[c]} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{c}</h2>
            </div>
            <Link to={`/category/${c}`} className="btn">
              See All
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftCategory;
