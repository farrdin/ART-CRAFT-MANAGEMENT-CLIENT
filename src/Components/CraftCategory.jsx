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
      <div className="mb-10">
        <h1 className="text-xl lg:text-3xl text-headL dark:text-headD text-center font-raleway mb-2">
          Explore by Paint Type
        </h1>
        <p className="text-xs text-headL dark:text-headD text-center font-raleway lg:w-[40%] mx-auto">
          Dive Into a World of Creative Possibilities Across Every Medium
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((c) => (
          <div
            key={c}
            className="card bg-backL dark:bg-backD  shadow-md shadow-butL dark:shadow-butD"
          >
            <div className="group">
              <div className="relative overflow-hidden">
                <img
                  src={photos[c]}
                  className="w-full p-2 h-[200px] rounded-e-2xl"
                />
                <div className="absolute w-full h-full bg-backD/80 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Link
                    to={`/category/${c}`}
                    className="btn  font-raleway text-base font-semibold hover:text-butL dark:hover:text-butD text-headL dark:text-headD"
                  >
                    {c}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftCategory;
