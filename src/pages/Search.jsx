import { useEffect } from "react";
import HeaderTwo from "../components/HeaderTwo";
import { ImAirplane } from "react-icons/im";
import { IoSearch } from "react-icons/io5";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";

const Search = () => {
  const options = [
    {
      id: 1,
      label: "تابان",
      checked: true,
      logo: "./src/assets/images/search/logos/taban-sm.png",
    },
    {
      id: 2,
      label: "آسمان",
      checked: false,
      logo: "./src/assets/images/search/logos/aseman-sm.png",
    },
    {
      id: 3,
      label: "آتا",
      checked: true,
      logo: "./src/assets/images/search/logos/ata-sm.png",
    },
    {
      id: 3,
      label: "فلای پرشیا",
      checked: true,
      logo: "./src/assets/images/search/logos/flypersia-sm.png",
    },
    {
      id: 3,
      label: "کارون",
      checked: true,
      logo: "./src/assets/images/search/logos/karun-sm.png",
    },
    {
      id: 3,
      label: "ساها",
      checked: true,
      logo: "./src/assets/images/search/logos/saha-sm.png",
    },
    {
      id: 3,
      label: "تابان",
      checked: true,
      logo: "./src/assets/images/search/logos/ata-sm.png",
    },
  ];

  useEffect(() => {
    document.title = "پرنت |  جستجو  ";
  }, []);
  return (
    <div className="bg-gray-100">
      <HeaderTwo />
      <div className="bg-white">
        {/* //////////////////////////////////////  */}
        <details className="collapse bg-white gap-5 px-24">
          <summary className="collapse-title text-base text-gray-700 flex gap-5 items-center font-medium text-center">
            <div className="flex gap-10 items-center justify-center">
              <div className="flex gap-2 items-center justify-center">
                <ImAirplane />
                بلیط هواپیما تهران به شیراز
              </div>
              <div className="flex">شنبه 1403/11/1</div>
              <div className="flex">1 مسافر</div>
              <button className="p-3 rounded-md bg-[gold]">
                <IoSearch />
              </button>
            </div>
          </summary>
          <div className="collapse-content">
            <div className="bg-gradient-to-tr from-[gold] to-[#9333ea] rounded-md py-10">
              <SearchBar />
            </div>
          </div>
        </details>
        {/* /////////////////////////  */}
      </div>
      <div className="flex gap-5 px-24 pt-5 mb-10">
        <div className="w-1/4 bg-white rounded-md border p-5">
          <h1 className="text-gray-700 text-sm mb-5">شرکت های هواپیمایی</h1>
          <ul>
            {options.map((option) => (
              <li key={option.id} className="flex gap-2">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    value={option.label}
                    defaultChecked={option.checked}
                    className="checkbox checkbox-primary"
                  />
                  <img src={option.logo} className="object-cover w-6"></img>
                  <span className="label-text text-gray-700">
                    {option.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/* left  */}
        <div className="w-3/4 bg-white rounded-md border p-5">
          <SearchCard />
        </div>
      </div>
      {/* ////////////////////  */}
      <Footer />
    </div>
  );
};

export default Search;
