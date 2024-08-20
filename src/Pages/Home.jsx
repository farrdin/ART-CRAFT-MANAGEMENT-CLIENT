import { Helmet } from "react-helmet-async";
import CraftItem from "../Components/CraftItem";
import CraftCategory from "../Components/CraftCategory";
import Banner from "../Components/Banner";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CraftyHub | Home</title>
      </Helmet>
      <div className="space-y-20">
        <Banner></Banner>
        <div className="w-[85%] mx-auto">
          <CraftItem className="w-[85%]"></CraftItem>
        </div>
        <div className="w-[85%] mx-auto">
          <CraftCategory className="w-[85%]"></CraftCategory>
        </div>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
      </div>
    </div>
  );
};

export default Home;
