import { useState } from "react";
import { IoMdAirplane } from "react-icons/io";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { IoSearch } from "react-icons/io5";

const FirstPart = () => {
  const startCity = [
    "تهران ",
    "اهواز ",
    "شیراز ",
    "مشهد ",
    "بندر عباس",
    "اصفهان ",
    "تبریز ",
    "کیش ",
  ];
  const endCity = [
    "تهران ",
    "اهواز ",
    "شیراز ",
    "مشهد ",
    "بندر عباس",
    "اصفهان ",
    "تبریز ",
    "کیش ",
  ];

  const [searchStart, setSearchTerm] = useState("");
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [selectedStart, setSelectedStart] = useState("");

  const [searchEnd, setSearchEnd] = useState("");
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  const [selectedEnd, setSelectedEnd] = useState("");

  const filteredStart = startCity.filter((option) =>
    option.toLowerCase().includes(searchStart.toLowerCase())
  );
  const filteredEnd = endCity.filter((option) =>
    option.toLowerCase().includes(searchEnd.toLowerCase())
  );

  /////

  const [isOpen, setIsOpen] = useState(false); // برای نمایش یا مخفی کردن لیست
  const [adultCount, setAdultCount] = useState(0); // تعداد بزرگسال
  const [childCount, setChildCount] = useState(0); // تعداد کودک
  const [babyCount, setBabyCount] = useState(0); // تعداد نوزاد
  const [inputValue, setInputValue] = useState(""); // برای نمایش در input

  // تابع برای باز و بسته کردن لیست
  const toggleDropdown = () => setIsOpen(!isOpen);

  // تابع برای تغییر مقدار در input
  const updateInputValue = () => {
    // محاسبه مجموع تعدادها مستقیماً در setInputValue
    setInputValue(
      `${adultCount} بزرگسال، ${childCount} کودک، ${babyCount} نوزاد`
    );
  };

  // تغییر تعداد بزرگسال
  const incrementAdult = () => {
    setAdultCount(adultCount + 1);
    updateInputValue();
  };

  const decrementAdult = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
      updateInputValue();
    }
  };

  // تغییر تعداد کودک
  const incrementChild = () => {
    setChildCount(childCount + 1);
    updateInputValue();
  };

  const decrementChild = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
      updateInputValue();
    }
  };

  // تغییر تعداد نوزاد
  const incrementBaby = () => {
    setBabyCount(babyCount + 1);
    updateInputValue();
  };

  const decrementBaby = () => {
    if (babyCount > 0) {
      setBabyCount(babyCount - 1);
      updateInputValue();
    }
  };

  const [tripType, setTripType] = useState("یک طرفه");

  return (
    <div className="z-40  w-full flex flex-col gap-4 px-24 absolute top-[210px]">
      <div className="backdrop-blur-md p-5 rounded-full bg-opacity-20 bg-white flex gap-8">
        <div
          className="text-black bg-white border-4 border-[gold] 
        flex cursor-pointer items-center gap-2 rounded-full p-2 px-5"
        >
          <IoMdAirplane className="text-[gold]" />
          پرواز داخلی
        </div>
        <div
          className="text-gray-700 border-4 border-gray-300 bg-white flex gap-2 
         cursor-pointer items-center rounded-full p-2 px-5"
        >
          <IoMdAirplane />
          پرواز خارجی
        </div>
      </div>
      <div className="bg-white pb-10 p-6 rounded-lg flex flex-col gap-14 shadow-md">
        <select
          className="py-1 px-2 text-xs rounded-full border-gray-300 border-2 text-black
         focus:border-[gold] w-fit bg-white max-w-xs"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <option selected>یک طرفه</option>
          <option>دو طرفه</option>
        </select>
        <div className="flex gap-2">
          <div className="relative w-1/6">
            <input
              type="text"
              value={selectedStart}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpenStart(true)}
              onBlur={() => setTimeout(() => setIsOpenStart(false), 100)}
              className="w-full p-2 cursor-pointer border-gray-300 border-2 placeholder:text-gray-500 text-gray-500
               bg-white rounded-full focus:outline-none
              focus:ring-2 focus:ring-[gold]"
              placeholder="مبدا (شهر)"
            />
            {isOpenStart && (
              <ul
                className="absolute z-10 w-full mt-1 max-h-60 overflow-y-auto bg-white border
               border-gray-300 rounded-md shadow-lg"
              >
                {filteredStart.length > 0 ? (
                  filteredStart.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedStart(option);
                        setSearchTerm(option);
                        setIsOpenStart(false);
                      }}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      {option}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">نتیجه‌ای پیدا نشد</li>
                )}
              </ul>
            )}
          </div>
          <div className="relative w-1/6">
            <input
              type="text"
              value={selectedEnd}
              onChange={(e) => setSearchEnd(e.target.value)}
              onFocus={() => setIsOpenEnd(true)}
              onBlur={() => setTimeout(() => setIsOpenEnd(false), 100)}
              className="w-full p-2 cursor-pointer border-gray-300 border-2 placeholder:text-gray-500 text-gray-500
               bg-white rounded-full focus:outline-none
              focus:ring-2 focus:ring-[gold]"
              placeholder="مقصد (شهر)"
            />
            {isOpenEnd && (
              <ul
                className="absolute z-10 w-full mt-1 max-h-60 overflow-y-auto bg-white border
               border-gray-300 rounded-md shadow-lg"
              >
                {filteredEnd.length > 0 ? (
                  filteredEnd.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedEnd(option);
                        setSearchEnd(option);
                        setIsOpenEnd(false);
                      }}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      {option}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">نتیجه‌ای پیدا نشد</li>
                )}
              </ul>
            )}
          </div>
          <div>
            <div style={{ direction: "rtl" }}>
              <DatePicker
                style={{
                  backgroundColor: "white",
                  borderWidth: "2px",
                  borderColor: "#d1d5db",
                  height: "24px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  padding: "20px 15px",
                }}
                placeholder="تاریخ رفت"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
            </div>
          </div>
          <div style={{ direction: "rtl" }}>
            <DatePicker
              style={{
                backgroundColor: tripType === "یک طرفه" ? "#e5e7eb" : "white", 
                borderWidth: "2px",
                borderColor: "#d1d5db", 
                height: "24px",
                borderRadius: "9999px",
                fontSize: "14px",
                padding: "20px 15px",
                cursor: tripType === "یک طرفه" ? "not-allowed" : "pointer",
              }}
              placeholder="تاریخ برگشت"
              calendar={persian}
              locale={persian_fa}
              disabled={tripType === "یک طرفه"}
              calendarPosition="bottom-right"
            />
          </div>
          <div className="relative">
            {/* ورودی با placeholder */}
            <input
              type="text"
              placeholder="مسافر"
              value={inputValue}
              onClick={toggleDropdown}
              className="w-full p-2 cursor-pointer border-gray-300 border-2 placeholder:text-gray-500 text-gray-500
               bg-white rounded-full focus:outline-none
              focus:ring-2 focus:ring-[gold]"
            />

            {/* لیست انتخاب‌ها */}
            {isOpen && (
              <div
                className="absolute mt-2 p-4 border text-gray-500 text-sm
               border-gray-300 bg-white rounded-md shadow-lg w-64"
              >
                <div className="flex justify-between items-center mb-2">
                  <span>بزرگسال</span>
                  <div className="flex items-center">
                    <button
                      onClick={decrementAdult}
                      className="px-2 text-black bg-[gold] rounded-sm"
                    >
                      -
                    </button>
                    <span className="mx-2">{adultCount}</span>
                    <button
                      onClick={incrementAdult}
                      className="px-2  text-black bg-[gold] rounded-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>کودک</span>
                  <div className="flex items-center">
                    <button
                      onClick={decrementChild}
                      className="px-2 text-black bg-[gold] rounded-sm"
                    >
                      -
                    </button>
                    <span className="mx-2">{childCount}</span>
                    <button
                      onClick={incrementChild}
                      className="px-2 text-black bg-[gold] rounded-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>نوزاد</span>
                  <div className="flex items-center">
                    <button
                      onClick={decrementBaby}
                      className="px-2 text-black bg-[gold] rounded-sm"
                    >
                      -
                    </button>
                    <span className="mx-2">{babyCount}</span>
                    <button
                      onClick={incrementBaby}
                      className="px-2 text-black bg-[gold] rounded-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="bg-[gold] py-1 px-4 w-1/6 text-center text-black rounded-full
           flex gap-2 items-center justify-center text-xs"
          >
            جستجو
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
