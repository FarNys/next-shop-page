import { Box, Container, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import StyledContainer from "../shared/StyledContainer";
import HomeSearch from "./HomeSearch";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <StyledContainer
      sx={{
        overflow: "hidden",
        aspectRatio: 3,

        [theme.breakpoints.down("md")]: {
          aspectRatio: 2,
        },
      }}
    >
      <Image
        src="/assets/images/grocery.png"
        alt="grocery-image"
        fill
        style={{ objectFit: "unset" }}
      />
      <HomeSearch />
    </StyledContainer>
  );
};

export default HeroSection;
