import { Helmet } from "react-helmet-async";
import CraftItem from "../Components/CraftItem";
import CraftCategory from "../Components/CraftCategory";
import Banner from "../Components/Banner";
import Exibition from "../Components/Exibition";
import Artist from "../Components/Artist";
import Comment from "../Components/Comment";

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
        <Exibition></Exibition>
        <div className="w-[85%] mx-auto">
          <Artist></Artist>
        </div>
        <Comment></Comment>
      </div>
    </div>
  );
};

export default Home;
