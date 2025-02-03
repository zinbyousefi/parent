import { useEffect } from "react";
import Header from "../components/Header";

const Home = () => {
  useEffect(() => {
    document.title = "پرنت | صفحه اصلی";
  }, []);

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="./src/assets/images/homeImages/1.jpg"
          className="w-full h-[450px] object-cover rounded-b-[3rem]"
        />
      </div>
      <div className="h-[100vh] bg-gray-100 flex items-center justify-center">
        <p>محتوای صفحه...</p>
      </div>
    </div>
  );
};

export default Home;
