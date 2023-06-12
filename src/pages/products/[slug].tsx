import Layout from "@/components/Layout/Layout";
import StyledContainer from "@/components/shared/StyledContainer";
import { getSingleProduct, useSingleProduct } from "@/hooks/useProducts";
import { ALL_URLS } from "@/utils/constant";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { data: singleProduct } = useSingleProduct(
    10,
    router.query.slug as string
  );
  console.log(singleProduct);
  return (
    <StyledContainer>
      <p>f</p>
    </StyledContainer>
  );
};

export default Product;

Product.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const findSlug = ctx.query.slug;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [ALL_URLS.PRODUCTS, findSlug, 10],
    queryFn: () => getSingleProduct(10, findSlug as string),
  });

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};
