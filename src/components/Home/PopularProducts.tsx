import Axios from "@/Axios";
import { useLayout } from "@/hooks/useLayout";
import { usePopularProducts } from "@/hooks/useProducts";
import { ProductsType } from "@/types";
import { ALL_URLS } from "@/utils/constant";
import React, { useMemo, useEffect } from "react";
import PopularProductContainer from "./PopularProductContainer";

const PopularProducts = () => {
  const { data: cats } = useLayout();
  const { data: popularProducts } = usePopularProducts();
  //   console.log(popularProducts);
  const popularProductLists = useMemo(() => {
    let emptyObject: Record<string, ProductsType[]> = {};
    if (!cats || !popularProducts) return;
    const categories = cats.data.filter(
      (el: any) => el.children.length > 0 && el.type.id === 1
    );

    categories.forEach((cat) => {
      emptyObject[cat.slug] = [];
    });
    popularProducts.forEach((el) => {
      const key = el.categories[0].slug;

      if (key in emptyObject) {
        // console.log(key);
        emptyObject[key] = [...emptyObject[key], el];
      }
      //   console.log([emptyObject[el.categories[0].slug]]);
    });

    return emptyObject;
  }, [cats, popularProducts]);
  console.log(popularProductLists);
  //   console.log(categories);
  return (
    <React.Fragment>
      {popularProductLists &&
        Object.entries(popularProductLists).map(([key, value]) => (
          <PopularProductContainer
            key={`popular-product-${key}`}
            title={key}
            value={value}
          />
        ))}
    </React.Fragment>
  );
};

export default PopularProducts;
