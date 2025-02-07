import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";

const useMyOrders = (id) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => apiClient.get(`/api/v1/orders/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};

export default useMyOrders;
