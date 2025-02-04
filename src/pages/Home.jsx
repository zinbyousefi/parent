import { useEffect } from "react";
import Header from "../components/Header";
import FirstPart from "../components/FirstPart";
import Suggestions from "../components/Suggestions";
import Stat from "../components/Stat";
import Section from "../components/Section";
import Faq from "../components/Faq";
import SectionTwo from "../components/SectionTwo";
import Sectionthree from "../components/Sectionthree";
import BusyRoutes from "../components/BusyRoutes";

const Home = () => {
  useEffect(() => {
    document.title = "پرنت | صفحه اصلی";
  }, []);

  return (
    <div className="relative">
      <Header />
      <div className="pb-40">
        <img
          src="./src/assets/images/homeImages/1.jpg"
          className="w-full h-[450px] object-cover rounded-b-[3rem]"
        />
      </div>
      <FirstPart />
      <Suggestions />
      <Stat />
      <BusyRoutes />
      <Section />
      <SectionTwo />
      <Faq />
      <Sectionthree />
    </div>
  );
};

export default Home;
