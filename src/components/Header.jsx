import { useState, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center
         px-24 h-20 transition-all duration-300 z-50 ${
           isScrolled ? "bg-white" : "bg-transparent"
         }`}
    >
      {/* right */}
      <div
        className={`navbar text-white flex gap-8 items-center  ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        <div className="flex gap-2 items-center">
          <img src="logo.png" className="size-10"></img>
          <a className="btn btn-ghost text-3xl font-bold">پرنت</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal font-bold">
            <li>
              <details>
                <summary className="flex gap-3">بلیط</summary>
                <ul
                  className="bg-white rounded-lg w-32 flex flex-col 
                justify-between text-black p-2"
                >
                  <li className="w-full text-center whitespace-nowrap">
                    <a>پرواز داخلی</a>
                  </li>
                  <li className="w-full text-center whitespace-nowrap">
                    <a>پرواز خارجی</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>درباره ما</a>
            </li>
            <li>
              <a>تماس</a>
            </li>
            <li>
              <a>بلاگ</a>
            </li>
          </ul>
        </div>
      </div>
      {/* left */}
      <div>
        <button
          className="py-2 px-3 rounded-md text-xs font-bold bg-white whitespace-nowrap
         text-black border-none hover:bg-gray-300 flex gap-2 items-center"
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
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-bold text-sm ">ورود یا ثبت نام </h3>
            <p className="py-4 text-gray-600">
              برای ادامه شماره موبایل خود را وارد کنید.
            </p>
            <input
              type="text"
              placeholder="شماره موبایل"
              className="bg-white border-2 border-gray-300 rounded-lg w-2/3 py-2 px-5 focus:ring-[gold]"
            />
            <p className="text-[11px] flex gap-1 items-center">
              <FaInfoCircle />
              استفاده از پرنت به معنی پذیرش{" "}
              <span className="text-[gold]"> قوانین و مقررات </span> این سرویس
              است.
            </p>
            <button className="bg-[gold] w-2/3 rounded-lg py-2 px-5">
              تایید و دریافت
            </button>
            <p className="text-sm text-[gold] hover:text-[goldenrod] cursor-pointer">
              ورود با کلمه عبور
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Header;
