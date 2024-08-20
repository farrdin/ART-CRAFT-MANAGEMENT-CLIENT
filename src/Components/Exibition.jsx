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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              unde laboriosam culpa quia ut, iusto libero quaerat assumenda
              aliquam veritatis aliquid iste totam tempore! Neque, odio.
              Expedita voluptates, dolores rerum consequuntur vero voluptas
              earum vel ab obcaecati sunt voluptate culpa placeat id officiis
              iusto eos. Enim dicta ipsa ipsam obcaecati.
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
