import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Axios from "@/Axios";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getProducts, useProducts } from "@/hooks/useProducts";
import { ALL_URLS } from "@/utils/constant";
import { NextPageWithLayout } from "@/types";

export const Home: NextPageWithLayout = () => {
  const { data } = useProducts();
  return (
    <div>
      <h1>Home</h1>
      <Button variant="outlined">Click Me</Button>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: [ALL_URLS.CATEGORIES],
  //   queryFn: () => getLayoutData(),
  // });

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}
