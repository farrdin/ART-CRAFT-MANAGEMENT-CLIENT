import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGoogle, FaLeaf, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FiKey } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import Artist1 from "../assets/Artist/artist1.jpg";
import Artist2 from "../assets/Artist/artist2.jpg";
import Artist3 from "../assets/Artist/artist3.jpg";
import Artist4 from "../assets/Artist/artist4.jpg";
import back from "../assets/bg3.jpg";
import A1 from "../assets/Content/A1.jpg";
import A2 from "../assets/Content/A2.jpg";
import A3 from "../assets/Content/A3.jpg";
import A4 from "../assets/Content/A4.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>CraftyHub | About</title>
      </Helmet>
      <div className="about-us bg-base-300 dark:bg-neutral-700 py-5">
        <h1 className="w-[80%] mx-auto text-lg text-paraL dark:text-paraD font-raleway font-semibold">
          ABOUT US
        </h1>
        <p className="w-[80%] mx-auto text-xs text-paraL dark:text-paraD font-raleway font-extralight">
          Home/About US
        </p>
      </div>
      <div className="typewrite w-[80%] mx-auto">
        <h1 className="text-xl font-raleway font-light text-headL dark:text-headD">
          <Typewriter
            words={[
              "Art begins with the heart and using eyes sees everything as it is. It is noticing and appreciating which is the basis for any creation.",
            ]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
      <div className="items w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-[gray] inline-block py-10 p-3 space-y-3 text-center relative">
          <h1 className="text-sm text-headL dark:text-headD  font-raleway font-medium">
            THE DIFFERENCE BETWEEN ART AND CRAFT
          </h1>
          <p className="text-xs text-headL dark:text-headD  font-raleway font-normal">
            The toold used for both maybe differnt but the heart that sees is
            the same.
          </p>

          <TiHome
            className="text-5xl p-3 bg-[black] text-[white] absolute -top-[28%] left-[42%] hover:bg-butL hover:dark:bg-butD transition-all duration-700"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Tools"
            data-tooltip-place="top"
          />
        </div>
        <div className="border border-[gray] inline-block py-10 p-3 space-y-3 text-center relative">
          <h1 className="text-sm text-headL dark:text-headD  font-raleway font-medium">
            THE ARTISAN IS CREATOR
          </h1>
          <p className="text-xs text-headL dark:text-headD  font-raleway font-normal">
            He sees everything and makes some thing out of the undifferentiated
            mass.
          </p>

          <FaLeaf
            className="text-5xl p-3 bg-[black] text-[white] absolute -top-[28%] left-[42%] hover:bg-butL hover:dark:bg-butD transition-all duration-700"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Artists"
            data-tooltip-place="top"
          />
        </div>
        <div className="border border-[gray] inline-block py-10 p-3 space-y-3 text-center relative">
          <h1 className="text-sm text-headL dark:text-headD  font-raleway font-medium">
            ART IS CRAFT
          </h1>
          <p className="text-xs text-headL dark:text-headD  font-raleway font-normal">
            Craft demands the third dimension of space while art creates it!
          </p>

          <FiKey
            className="text-5xl p-3 bg-[black] text-[white] absolute -top-[28%] left-[42%] hover:bg-butL hover:dark:bg-butD transition-all duration-700"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Join!"
            data-tooltip-place="top"
          />
        </div>
      </div>
      <div className="Artist">
        <div
          className="bg-fixed bg-cover bg-center space-y-10 py-10 "
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 0.8) ), url(${back})`,
          }}
        >
          <h1 className="text-2xl text-center text-headD font-raleway font-semibold">
            Creative Modern Artists
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-5">
            <div className="group relative overflow-hidden shadow-md shadow-butL dark:shadow-butD w-[80%] md:w-[95%] cursor-pointer">
              <img src={Artist1} className="h-[300px] w-full" />
              <div className="absolute -bottom-10 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-1000 text-center bg-backL text-headL font-raleway w-full h-[110px] p-5">
                <h1 className="text-base font-medium">CLINT DAVIS</h1>
                <p className="text-xs font-medium">Sculptor</p>
                <div className="flex justify-center items-center gap-2 mt-6 ">
                  <Link>
                    <FaFacebook className="text-[blue]" />
                  </Link>
                  <Link>
                    <FaTwitter className="text-linL" />
                  </Link>
                  <Link>
                    <FaGoogle className="text-[red]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden shadow-md shadow-butL dark:shadow-butD w-[80%] md:w-[95%] cursor-pointer">
              <img src={Artist2} className="h-[300px] w-full" />
              <div className="absolute -bottom-10 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-1000 text-center bg-backL text-headL font-raleway w-full h-[110px] p-5">
                <h1 className="text-base font-medium">Elisa Carter</h1>
                <p className="text-xs font-medium">Modern Art</p>
                <div className="flex justify-center items-center gap-2 mt-6 ">
                  <Link>
                    <FaFacebook className="text-[blue]" />
                  </Link>
                  <Link>
                    <FaTwitter className="text-linL" />
                  </Link>
                  <Link>
                    <FaGoogle className="text-[red]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden shadow-md shadow-butL dark:shadow-butD w-[80%] md:w-[95%] cursor-pointer">
              <img src={Artist3} className="h-[300px] w-full" />
              <div className="absolute -bottom-10 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-1000 text-center bg-backL text-headL font-raleway w-full h-[110px] p-5">
                <h1 className="text-base font-medium">Thelma Haynes</h1>
                <p className="text-xs font-medium">Metal Art</p>
                <div className="flex justify-center items-center gap-2 mt-6 ">
                  <Link>
                    <FaFacebook className="text-[blue]" />
                  </Link>
                  <Link>
                    <FaTwitter className="text-linL" />
                  </Link>
                  <Link>
                    <FaGoogle className="text-[red]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden shadow-md shadow-butL dark:shadow-butD w-[80%] md:w-[95%] cursor-pointer">
              <img src={Artist4} className="h-[300px] w-full" />
              <div className="absolute -bottom-10 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-1000 text-center bg-backL text-headL font-raleway w-full h-[110px] p-5">
                <h1 className="text-base font-medium">Zachary Henry</h1>
                <p className="text-xs font-medium">Painter</p>
                <div className="flex justify-center items-center gap-2 mt-6 ">
                  <Link>
                    <FaFacebook className="text-[blue]" />
                  </Link>
                  <Link>
                    <FaTwitter className="text-linL" />
                  </Link>
                  <Link>
                    <FaGoogle className="text-[red]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <img src={A1} className="h-[300px] w-full" />
          <img src={A2} className="h-[300px] w-full" />
          <img src={A3} className="h-[300px] w-full" />
          <img src={A4} className="h-[300px] w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto my-5">
          <div className=" mx-auto text-center p-5 space-y-3">
            <h1 className="text-headL dark:text-headD text-lg font-raleway font-medium">
              Terracotta Idols
            </h1>
            <p className="text-sm text-paraL dark:text-paraD font-light font-raleway ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis quam a nunc porttitor tempus. Sed eu lobortis tortor. Mauris
              facilisis posuere nisl
            </p>
            <button className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-sm font-semibold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD">
              Learn More
            </button>
          </div>
          <div className=" mx-auto text-center p-5 space-y-3">
            <h1 className="text-headL dark:text-headD text-lg font-raleway font-medium">
              Clay Model Toys for Export
            </h1>
            <p className="text-sm text-paraL dark:text-paraD font-light font-raleway ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis quam a nunc porttitor tempus. Sed eu lobortis tortor. Mauris
              facilisis posuere nisl
            </p>
            <button className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-sm font-semibold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD">
              Learn More
            </button>
          </div>
          <div className=" mx-auto text-center p-5 space-y-3">
            <h1 className="text-headL dark:text-headD text-lg font-raleway font-medium">
              Bhatik Work on Apparels
            </h1>
            <p className="text-sm text-paraL dark:text-paraD font-light font-raleway ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis quam a nunc porttitor tempus. Sed eu lobortis tortor. Mauris
              facilisis posuere nisl
            </p>
            <button className="btn bg-butL dark:bg-butD text-headD dark:text-headL font-raleway text-sm font-semibold hover:bg-butD dark:hover:bg-butL hover:text-headL hover:dark:text-headD">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default About;
