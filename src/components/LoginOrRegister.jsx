import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const LoginOrRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      {/* Dynamic Title */}
      <h3 className="font-bold text-sm">
        {isLogin ? "ورود یا ثبت نام" : "ثبت نام"}
      </h3>

      {/* Dynamic Description */}
      <p className="py-4 text-gray-600">
        {isLogin
          ? "برای ادامه شماره موبایل خود را وارد کنید."
          : "لطفا اطلاعات خود را وارد کنید."}
      </p>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="شماره موبایل"
        className="bg-white border-2 border-gray-300 rounded-lg w-2/3 py-2 px-5 focus:ring-[gold]"
      />

      {!isLogin && (
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="bg-white border-2 border-gray-300 rounded-lg w-2/3 py-2 px-5 focus:ring-[gold]"
        />
      )}

      {/* Info Text */}
      <p className="text-[11px] flex gap-1 items-center">
        <FaInfoCircle />
        استفاده از پرنت به معنی پذیرش{" "}
        <span className="text-[gold]"> قوانین و مقررات </span> این سرویس است.
      </p>

      {/* Dynamic Button */}
      <button className="bg-[gold] w-2/3 rounded-lg py-2 px-5">
        {isLogin ? "تایید و دریافت" : "ثبت نام"}
      </button>

      {/* Toggle Between Login and Register */}
      <p
        className="text-sm text-[gold] hover:text-[goldenrod] cursor-pointer"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "حساب کاربری ندارید ؟ ثبت‌نام کنید"
          : "قبلا ثبت‌نام کرده‌اید؟ ورود"}
      </p>
    </div>
  );
};

export default LoginOrRegister;
