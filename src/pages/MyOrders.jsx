import { useEffect } from "react";
import OrdersCard from "../components/OrdersCard";
import { FaTrainSubway } from "react-icons/fa6";

const MyOrders = () => {
  useEffect(() => {
    document.title = "پرنت | سفرهای من  ";
  }, []);
  return (
    <div>
      <OrdersCard
        icon={<FaTrainSubway />}
        transportation="قطار"
        status="نهایی شده"
        orderNumber="123456"
        amount="1,200,000"
      />
    </div>
  );
};

export default MyOrders;
