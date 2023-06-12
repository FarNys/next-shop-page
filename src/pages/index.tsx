import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Axios from "@/Axios";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import {
  getPopularProducts,
  getProducts,
  usePopularProducts,
  useProducts,
} from "@/hooks/useProducts";
import { ALL_URLS } from "@/utils/constant";
import { NextPageWithLayout } from "@/types";
import { getLayoutData } from "@/hooks/useLayout";
import PopularProducts from "@/components/Home/PopularProducts";
import HeroSection from "@/components/Home/HeroSection";
import CategoryMenu from "@/components/Layout/CategoryMenu";
import Promotion from "@/components/Layout/Promotion";

export const Home: NextPageWithLayout = () => {
  const { data } = useProducts();

  return (
    <div>
      <HeroSection />
      <CategoryMenu />
      <Promotion />
      <PopularProducts />
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [ALL_URLS.CATEGORIES],
    queryFn: () => getLayoutData(),
  });
  await queryClient.prefetchQuery({
    queryKey: [ALL_URLS.POPULAR_PRODUCTS],
    queryFn: () => getPopularProducts(),
  });

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}
