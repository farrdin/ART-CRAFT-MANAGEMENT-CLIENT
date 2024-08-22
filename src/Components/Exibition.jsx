import { Link } from "react-router-dom";
import back from "../assets/bg.jpg";
import ex1 from "../assets/Content/Exibition.jpg";

const Exibition = () => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-xl lg:text-3xl text-headL dark:text-headD text-center font-raleway mb-2">
          Explore Our Art Exhibitions
        </h1>
        <p className="text-xs text-headL dark:text-headD text-center font-raleway  lg:w-[40%] mx-auto">
          Immerse yourself in the world of creativity through our curated
          events.
        </p>
      </div>
      <div
        className="bg-fixed bg-cover bg-center "
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="lg:flex p-5 items-center space-y-10">
          <div className="lg:w-1/2 mx-auto space-y-3">
            <h1 className="text-base text-neutral-400 font-merri">
              Pixart Exibition
            </h1>
            <h1 className="text-4xl text-headD font-merri font-bold">
              Magical World of Art Denice Francisco
            </h1>
            <p className="text-lg text-headD font-raleway">
              Magical World of Art by Denice Francisco invites you into a
              vibrant realm where imagination and creativity come alive. Through
              her art, Francisco captures the enchanting essence of everyday
              life, transforming ordinary moments into extraordinary visual
              experiences. Her work is a journey into a world of color, wonder,
              and magic.
            </p>
            <Link
              to="about"
              className="btn bg-neutral-700 dark:bg-neutral-300  text-headD dark:text-headL font-raleway text-base font-semibold hover:bg-butL dark:hover:bg-butD transition-transform duration-300 ease-in-out hover:scale-110"
            >
              More Details
            </Link>
          </div>
          <div className="mx-auto">
            <img src={ex1} className="w-full h-[350px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exibition;
