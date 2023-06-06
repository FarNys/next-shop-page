import Axios from "@/Axios";
import { ProductsType, ResultType } from "@/types";
import { ALL_URLS } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";

export const getProducts = async (limit: number = 10) => {
  const res: ResultType<ProductsType> = await Axios.get(ALL_URLS.PRODUCTS, {
    params: {
      limit: limit,
    },
  });
  return res.data;
};

export const useProducts = (limit: number = 10) => {
  return useQuery({
    queryKey: [ALL_URLS.PRODUCTS, limit],
    queryFn: () => getProducts(limit),
  });
};
