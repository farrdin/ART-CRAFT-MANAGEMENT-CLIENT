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
              Thus Spoke Our Clients captures the heartfelt testimonials and
              experiences shared by those who have engaged with our services.
              Each clients words reflect their satisfaction, appreciation, and
              the impact our work has had on their lives. From transforming
              creative visions into reality to delivering exceptional quality,
              our clients voices resonate with trust and gratitude. Their
              feedback not only highlights our commitment to excellence but also
              inspires us to continue exceeding expectations.
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
