import { Helmet } from "react-helmet-async";
import CraftItem from "../Components/CraftItem";
import CraftCategory from "../Components/CraftCategory";
import Banner from "../Components/Banner";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>CraftyHub | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-[85%] mx-auto">
        <CraftItem></CraftItem>
        <CraftCategory></CraftCategory>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
      </div>
    </div>
  );
};

export default Home;
