import { useEffect } from "react";
import OrdersCard from "../components/OrdersCard";
import useMyOrders from "../hooks/useMyOrders";
import useUserStore from "../stores/user-store";
import { ImAirplane } from "react-icons/im";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { id: userId, initializeAuth } = useUserStore();
  const { data: orders, isLoading, error } = useMyOrders(userId);

  console.log("Orders Data:", orders?.data);
  orders?.data?.forEach((order) => console.log("Order ID:", order.id));

  console.log(orders);
  useEffect(() => {
    initializeAuth();
    document.title = "پرنت | سفرهای من  ";
  }, [initializeAuth]);

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطایی رخ داده است!</p>;
  if (!orders || orders.length === 0) return <p>سفری یافت نشد.</p>;
  return (
    <div className="flex flex-col gap-5">
      {orders.data.map((order) => (
        <Link key={order.id} to={`/order-detail/${order.id}`}>
          <OrdersCard
            icon={<ImAirplane />}
            transportation={order?.transportation || "هواپیما"}
            status={
              order?.status === "CONFIRMED" ? "نهایی شده" : "در انتظار پرداخت"
            }
            orderNumber={order?.id}
            amount={order?.total_price}
          />
        </Link>
      ))}
    </div>
  );
};

export default MyOrders;
