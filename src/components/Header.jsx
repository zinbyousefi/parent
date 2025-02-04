import { useState, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import LoginOrRegister from "./LoginOrRegister";
import { Link } from "react-router-dom";

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
         } ${isScrolled ? "border-b" : ""}`}
    >
      {/* right */}
      <div className="navbar text-white flex gap-8 items-center">
        <div
          className={`flex gap-2 items-center ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <img src="logo.png" className="size-10"></img>
          <a className="btn btn-ghost text-3xl font-bold">پرنت</a>
        </div>
        <div className="flex-none">
          <ul
            className={`menu menu-horizontal font-bold ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
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
              <Link to={"/about"}>
                <a>درباره ما</a>
              </Link>
            </li>
            <li>
              <a>تماس</a>
            </li>
          </ul>
        </div>
      </div>
      {/* left */}
      <div>
        <button
          className={`py-2 px-3 rounded-md text-xs font-bold whitespace-nowrap
         text-black border-none hover:bg-gray-300 flex gap-2 items-center ${
           isScrolled ? "bg-gray-100" : "bg-white"
         }`}
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
    </div>
  );
};

export default Header;
