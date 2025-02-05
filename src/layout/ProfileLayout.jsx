import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import LoginOrRegister from "../components/LoginOrRegister";
import { Link, useLocation } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const ProfileLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div
        className="top-0 left-0 w-full flex justify-between items-center
         px-24 h-20 border-b"
      >
        {/* right */}
        <div className="navbar text-white flex gap-8 items-center">
          <Link to={"/"}>
            <div className="flex gap-2 items-center">
              <img src="logo.png" className="size-10"></img>
              <a className="btn btn-ghost text-3xl font-bold text-black">
                پرنت
              </a>
            </div>
          </Link>
          <div className="flex-none">
            <ul className="menu menu-horizontal font-bold text-black">
              <li>
                <details>
                  <summary className="flex gap-3">بلیط</summary>
                  <ul
                    className="bg-white rounded-lg w-32 flex flex-col 
                justify-between text-black p-2"
                  >
                    <Link to={"/"}>
                      <li className="w-full text-center whitespace-nowrap">
                        <a>پرواز داخلی</a>
                      </li>
                    </Link>
                    <Link to={"/foreign"}>
                      <li className="w-full text-center whitespace-nowrap">
                        <a>پرواز خارجی</a>
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>
              <li>
                <Link to={"/about"}>
                  <a>درباره ما</a>
                </Link>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  تماس
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* left */}
        <div>
          <button
            className="py-2 px-3 rounded-md text-xs font-bold whitespace-nowrap
         text-black border-none hover:bg-gray-300 bg-gray-200 flex gap-2 items-center"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            ورود یا ثبت نام
            <BsPersonFill />
          </button>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white text-black">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <LoginOrRegister />
          </div>
        </dialog>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box bg-white text-black p-10">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="text-lg text-black text-center font-bold mb-5">
              تماس با ما
            </h1>
            <p className="text-xs leading-7 mb-5">
              برای هرگونه سوال، پیشنهاد یا درخواست پشتیبانی، خوشحال می‌شویم که
              با ما تماس بگیرید. تیم پشتیبانی پرنت به‌طور مداوم در تلاش است تا
              بهترین خدمات را به شما ارائه دهد و از نظرات و پیشنهادات شما
              استقبال می‌کند. لطفاً برای ارتباط با ما از طریق فرم زیر استفاده
              کنید یا به آدرس ایمیل و شماره تماس ارائه شده مراجعه نمایید. تیم ما
              در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.
            </p>
            <div className="text-center border p-3 flex flex-col gap-4 border-slate-300 rounded-md">
              <div className="font-bold flex justify-center gap-2">
                <BsFillTelephoneFill color="gold" />
                شماره تماس: ۰۲۱ - ۱۲۳۴ ۰۰۰۰
              </div>
              <div className="font-bold flex justify-center items-center gap-2">
                <MdOutlineEmail color="gold" size={20} />
                ایمیل: mail@email.com
              </div>
              <div className="font-bold text-sm px-10 flex justify-center items-center ">
                <FaLocationDot color="gold" size={30} />
                آدرس دفتر مرکزی: خیابان ولی‌عصر، تقاطع بلوار کشاورز، پلاک ۱۲۳،
                طبقه ۱۲۳، واحد ۱۲۳
              </div>
            </div>
          </div>
        </dialog>
      </div>
      {/* Header  */}

      {/* // body  */}

      <div className="mt-12 px-24 flex gap-5 pb-10 mb-20">
        {/* right  */}
        <div
          className="bg-white p-5 py-7 border w-1/4 border-gray-300 rounded-md flex flex-col
         justify-center text-center items-center gap-5 h-fit"
        >
          <img
            src="./src/assets/images/profile/f1.png"
            className=" border rounded-full border-[gold]"
          ></img>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-bold">name</h1>
            <span className="text-gray-600">09367890005</span>
          </div>
          {/* ////  */}
          <div className="bg-[#9333ea] p-3 rounded-md w-full flex flex-col gap-5">
            <div className="flex justify-between text-sm text-white">
              <span className="text-white flex gap-2 items-center">
                <FaWallet />
                موجودی حساب
              </span>
              <span className="text-xs"> 0 تومان</span>
            </div>
            
          </div>

        
          {/* ///  */}
          <div className="gap-4 w-full">
            <h3 className="text-xs text-gray-600 font-bold text-start mb-1">
              منوی کاربری
            </h3>
            <ul
              className="menu w-full rounded-md bg-white flex text-start
             text-gray-500 flex-col gap-4"
            >
              <Link to="/my-account">
                <li
                  className={`border border-slate-200 text-gray-500 rounded-md 
                     p-3 ${
                       location.pathname === "/my-account"
                         ? "bg-gray-200 text-gray-600"
                         : ""
                     }`}
                >
                  حساب کاربری
                </li>
              </Link>

              <Link to="/my-travels">
                <li
                  className={`border text-gray-500 border-slate-200 rounded-md p-3 ${
                    location.pathname === "/my-travels"
                      ? "bg-gray-200 text-gray-600"
                      : ""
                  }`}
                >
                  سفرهای من
                </li>
              </Link>

          
            </ul>
          </div>
        </div>
        {/* left  */}
        <div className="bg-white p-7 border border-gray-300 w-3/4 rounded-md">
          {children}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileLayout;
