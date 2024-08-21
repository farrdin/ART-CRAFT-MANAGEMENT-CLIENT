import { FaQuoteLeft } from "react-icons/fa";
import back from "../assets/bg1.jpg";
import team from "../assets/team1.jpg";
import "animate.css";

const Comment = () => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-xl lg:text-3xl text-headL dark:text-headD text-center font-raleway mb-2">
          Thus Spoke Our Clients
        </h1>
        <p className="text-xs text-headL dark:text-headD text-center font-raleway  lg:w-[40%] mx-auto">
          Our story spreads by word of mouth which is more effective than any
          advertisement!
        </p>
      </div>
      <div
        className="bg-fixed bg-cover bg-center "
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="lg:flex p-5 items-center space-y-10">
          <div className="lg:w-1/2 mx-auto animate__animated animate__backInLeft animate__delay-2s">
            <h1 className="text-xl text-butL dark:text-butD font-raleway font-semibold">
              Janet Briggs
            </h1>
            <span className="text-sm text-headD font-raleway font-extralight">
              Painter
            </span>
            <p className="quote text-lg text-headD font-raleway m lg:mt-14">
              <FaQuoteLeft />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              unde laboriosam culpa quia ut, iusto libero quaerat assumenda
              aliquam veritatis aliquid iste totam tempore! Neque, odio.
              Expedita voluptates, dolores rerum consequuntur vero voluptas
              earum vel ab obcaecati sunt voluptate culpa placeat id officiis
              iusto eos. Enim dicta ipsa ipsam obcaecati.
            </p>
          </div>
          <div className="mx-auto animate__animated animate__backInRight">
            <img
              src={team}
              className="w-full h-[350px] animate__backInRight animate__delay-2s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
