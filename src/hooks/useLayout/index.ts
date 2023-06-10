import Axios from "@/Axios";
import { CategoryType, ProductsType, ResultType } from "@/types";
import { ALL_URLS } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";

export const getLayoutData = async () => {
  const res: ResultType<CategoryType> = await Axios.get(ALL_URLS.CATEGORIES, {
    params: {
      limit: 1000,
    },
  });
  return res.data;
};

export const useLayout = () => {
  return useQuery({
    queryKey: [ALL_URLS.CATEGORIES],
    queryFn: () => getLayoutData(),
  });
};
