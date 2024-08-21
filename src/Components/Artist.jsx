import Lottie from "lottie-react";
import Plus from "../../public/Plus.json";
import creators1 from "../assets/Artist/proces2.jpg";
import creators2 from "../assets/Artist/proces1.jpg";
import creators3 from "../assets/Artist/proces3.jpg";
import Gallery1 from "../assets/Artist/Gallery1.jpg";
import Gallery2 from "../assets/Artist/Gallery2.jpg";
import { useRef } from "react";

const Artist = () => {
  const lottieRef1 = useRef(null);
  const lottieRef2 = useRef(null);
  const lottieRef3 = useRef(null);
  return (
    <div>
      <div className="top-section mb-5">
        <h1 className="text-xl lg:text-3xl text-headL dark:text-headD text-center font-raleway mb-2">
          Creative Modern Artists
        </h1>
        <p className="text-xs text-headL dark:text-headD text-center font-raleway  lg:w-[40%] mx-auto">
          Get Inspired by the Creative Journeys of Master Artisans
        </p>
      </div>
      <div className="middle-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center ">
        <div className="space-y-20">
          <div className="relative">
            <div className="overflow-hidden shadow-lg shadow-butL dark:shadow-butD">
              <img
                src={creators1}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 "
              />
              <div
                onMouseEnter={() => lottieRef1.current.play()}
                onMouseLeave={() => lottieRef1.current.stop()}
              >
                <Lottie
                  loop={false}
                  animationData={Plus}
                  lottieRef={lottieRef1}
                  className="absolute right-[36%] bottom-[-12%]  transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
                  style={{ width: 100, height: 100 }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-headL dark:text-headD font-raleway font-light">
              Caricature Artist at Work
            </h1>
            <p className="text-sm text-paraL dark:text-paraD w-[80%] mx-auto font-raleway font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam
              id arcu tortor. Sed get sit ame egestasquis.
            </p>
          </div>
        </div>
        <div className="space-y-20">
          <div className="relative">
            <div className="overflow-hidden shadow-lg shadow-butL dark:shadow-butD">
              <img
                src={creators2}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <div
                onMouseEnter={() => lottieRef2.current.play()}
                onMouseLeave={() => lottieRef2.current.stop()}
              >
                <Lottie
                  loop={false}
                  animationData={Plus}
                  lottieRef={lottieRef2}
                  className="absolute right-[36%] bottom-[-12%]  transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
                  style={{ width: 100, height: 100 }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-headL dark:text-headD font-raleway font-light">
              Creativity Finds Expression
            </h1>
            <p className="text-sm text-paraL dark:text-paraD w-[80%] mx-auto font-raleway font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam
              id arcu tortor. Sed get sit ame egestasquis.
            </p>
          </div>
        </div>
        <div className="space-y-20">
          <div className="relative">
            <div className="overflow-hidden shadow-lg shadow-butL dark:shadow-butD">
              <img
                src={creators3}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <div
                onMouseEnter={() => lottieRef3.current.play()}
                onMouseLeave={() => lottieRef3.current.stop()}
              >
                <Lottie
                  loop={false}
                  animationData={Plus}
                  lottieRef={lottieRef3}
                  className="absolute right-[36%] bottom-[-12%]  transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
                  style={{ width: 100, height: 100 }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-headL dark:text-headD font-raleway font-light">
              Watercolor makes indelible Impression!
            </h1>
            <p className="text-sm text-paraL dark:text-paraD w-[80%] mx-auto font-raleway font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam
              id arcu tortor. Sed get sit ame egestasquis.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-section grid lg:grid-cols-2 lg:grid-rows-2 gap-4 h-full my-20">
        <div className="relative">
          <div className=" overflow-hidden shadow-lg shadow-butL dark:shadow-butD">
            <img
              src={Gallery1}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            />

            <div className="bg-backL dark:bg-backD absolute lg:right-[-55%] top-[30%] w-2/3 text-center p-5 space-y-3 shadow-lg shadow-headL ">
              <p className="text-sm font-light text-paraL dark:text-paraD font-raleway ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nemo architecto eveniet id sed ea, vero consequuntur
                voluptas labore repellendus.
              </p>
              <h1 className="text-base text-headL dark:text-headD font-raleway font-medium">
                Waterfront Scenario - Oil canvas by an artist.
              </h1>
            </div>
          </div>
        </div>
        <div className="relative lg:col-start-2 lg:row-start-2">
          <div className="overflow-hidden shadow-lg shadow-butL dark:shadow-butD">
            <img
              src={Gallery2}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            />

            <div className="bg-backL dark:bg-backD absolute lg:left-[-55%] top-[30%] w-2/3 text-center p-5 space-y-3 shadow-lg shadow-headL">
              <p className="text-sm font-light text-paraL dark:text-paraD font-raleway ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nemo architecto eveniet id sed ea, vero consequuntur
                voluptas labore repellendus.
              </p>
              <h1 className="text-base text-headL dark:text-headD font-raleway font-medium">
                Art & Craft paintings @ the art Galery.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
