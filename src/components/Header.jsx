import { useState, useEffect } from "react";

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
         px-20 h-20 transition-all duration-300 z-50 ${
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
        <button className="btn bg-white whitespace-nowrap text-black border-none hover:bg-gray-300 ">
          ورود یا ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Header;
