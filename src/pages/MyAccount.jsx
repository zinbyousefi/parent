import { useEffect } from "react";

const MyAccount = () => {
  useEffect(() => {
      document.title = "پرنت | حساب کاربری ";
    }, []);
  return <div>MyAccounts</div>;
};

export default MyAccount;
