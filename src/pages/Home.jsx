import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        document.title = 'پرنت | صفحه اصلی'
    })
  return (
    <div>
      <div>
        <img src="./src/assets/images/homeImages/1.jpg" className="rounded-b-[4rem] -z-10"></img>
      </div>
    </div>
  );
};

export default Home;
