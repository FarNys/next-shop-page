import { useLayout } from "@/hooks/useLayout";
import { Box, Button, SvgIcon } from "@mui/material";
import React, { useMemo } from "react";
import IconCreator from "../icons/category/IconCreator";
import Link from "next/link";
import CategoryMenu from "./CategoryMenu";
import Header from "./Header";
import HeroSection from "../Home/HeroSection";
import Promotion from "./Promotion";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <Header />

      {children}
    </Box>
  );
};

export default Layout;
