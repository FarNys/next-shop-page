import { useLayout } from "@/hooks/useLayout";
import { Box, Button, SvgIcon } from "@mui/material";
import React, { useMemo } from "react";
import IconCreator from "../icons/category/IconCreator";
import Link from "next/link";
import CategoryMenu from "./CategoryMenu";
import Header from "./Header";
import HeroSection from "./HeroSection";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  // console.log(CategoryIcon);

  // console.log(categories[0].children[0].);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <Header />
      <HeroSection />
      <CategoryMenu />
      <h1>Layout</h1>

      {/* <Button>Click Me</Button> */}
      {children}
    </Box>
  );
};

export default Layout;
