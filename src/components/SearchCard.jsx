
import { IoIosArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";

const SearchCard = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-md border flex ">
      {/* rihgt  */}
      <div className="border-l-2 border-gray-300 w-3/4 flex flex-col gap-7">
        {/* right top  */}
        <div className="flex gap-10 w-full items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src="./src/assets/images/search/logos/ata-sm.png"></img>
            <h2 className="text-black text-xl">آتا</h2>
          </div>
          <div className="flex justify-between w-full items-center  text-black px-10">
            <div className="flex gap-5 text-xl ">
              <h3 className="flex gap-2 items-center">تهران</h3>
              <span className="font-bold">22:50</span>
            </div>
            <div className="flex items-center font-bold">
              ------------------------------------
              <IoIosArrowBack />
            </div>
            <div className="flex gap-5 text-xl ">
              <h3 className="flex gap-2 items-center">شیراز</h3>
              <span className="font-bold">00:50</span>
            </div>
          </div>
        </div>
        {/* right bottom  */}
        <div className="flex gap-5 text-sm w-full text-black">
          <div className="flex flex-col w-full">
            <details className="collapse bg-gray-100">
              <summary className="collapse-title text-sm  font-medium">
                <span className="bg-[gold] p-2 rounded-md">اطلاعات پرواز</span>
              </summary>
              <div className="collapse-content">
                <div className=" grid grid-cols-2 gap-3">
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-bold">شماره پرواز</h3>
                    <span>4567</span>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-bold">ترمینال</h3>
                    <span> فرودگاه مهرآباد - ترمینال 4</span>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-bold">مدل هواپیما</h3>
                    <span> Boeing 737-300</span>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-bold">مقدار بار مجاز</h3>
                    <span>20 kg</span>
                  </div>
                </div>
              </div>
            </details>
            <details className="collapse bg-gray-100">
              <summary className="collapse-title text-sm  font-medium">
                <span className="bg-[gold] p-2 rounded-md">قوانین استرداد</span>
              </summary>
              <div className="collapse-content">
                <p className="text-xs mb-2">
                  درصد جریمه کسر شده بر اساس زمان اعلام کنسلی قوانین استرداد
                </p>
                <div className="flex gap-5 px-5">
                  <div className="w-1/4 text-center">
                    <h3 className="text-error text-base">30%</h3>
                    <span>
                      از زمان صدور بلیط تا 12:00 ظهر 3 روز قبل از پرواز
                    </span>
                  </div>
                  <div className="w-1/4 text-center">
                    <h3 className="text-error text-base">60%</h3>
                    <span>
                      از 12:00 ظهر 3 روز قبل از پرواز تا 12:00 ظهر 2 روز قبل از
                      پرواز
                    </span>
                  </div>
                  <div className="w-1/4 text-center">
                    <h3 className="text-error text-base">70%</h3>
                    <span>
                      از 12:00 ظهر 2 روز قبل از پرواز تا 12:00 ظهر 1 روز قبل از
                      پرواز
                    </span>
                  </div>
                  <div className="w-1/4 text-center">
                    <h3 className="text-error text-base">75%</h3>
                    <span>
                      از 12:00 ظهر 1 روز قبل از پرواز تا 4 ساعت قبل از پرواز
                    </span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
      {/* left  */}
      <div className="w-1/4 flex flex-col justify-start p-5 items-center gap-5">
        <div className="flex gap-2 items-center">
          <span className="text-lg text-[#9333ea] font-bold">1,300,000</span>
          <span className="text-xs text-gary-600">تومان</span>
        </div>
        <span className="font-bold text-gray-500">نرخ رسمی ایرلاین</span>
        <Link
          to={"/orders-progress"}
          className="bg-[gold] rounded-md py-1 text-center text-sm text-black w-full"
        >
          انتخاب پرواز
        </Link>
      </div>
    </div>
  );
};

export default SearchCard;
