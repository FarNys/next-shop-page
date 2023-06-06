import Layout from "@/components/Layout/Layout";
import React from "react";

const Products = () => {
  return <div>Products</div>;
};

export default Products;

Products.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
