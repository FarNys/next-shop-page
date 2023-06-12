import Axios from "@/Axios";
import { ProductsType, ResultType } from "@/types";
import { ALL_URLS } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";

export const getSingleProduct = async (limit: number = 10, slug: string) => {
  const res: ResultType<ProductsType> = await Axios.get(
    ALL_URLS.PRODUCTS + `/${slug}`,
    {
      params: {
        limit,
      },
    }
  );
  return res.data;
};

export const useSingleProduct = (limit: number = 10, slug: string) => {
  return useQuery({
    queryKey: [ALL_URLS.PRODUCTS, slug, limit],
    queryFn: () => getSingleProduct(limit, slug),
  });
};

export const getProducts = async (limit: number = 10) => {
  const res: ResultType<ProductsType> = await Axios.get(ALL_URLS.PRODUCTS, {
    params: {
      limit,
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

export const getPopularProducts = async (limit: number = 1000) => {
  const res: {
    data: ProductsType[];
  } = await Axios.get(ALL_URLS.POPULAR_PRODUCTS, {
    params: {
      limit,
      type_slug: "grocery",
    },
  });
  return res.data;
};

export const usePopularProducts = (limit: number = 1000) => {
  return useQuery({
    queryKey: [ALL_URLS.POPULAR_PRODUCTS],
    queryFn: () => getPopularProducts(limit),
  });
};
