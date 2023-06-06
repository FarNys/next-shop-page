import { Box, Container, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import StyledContainer from "../shared/StyledContainer";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <StyledContainer style={{ aspectRatio: 3 }} sx={{ overflow: "hidden" }}>
      <Image
        src="/assets/images/grocery.png"
        alt="home-image"
        fill
        style={{ objectFit: "unset" }}
      />
      <Box sx={{}}></Box>
    </StyledContainer>
  );
};

export default HeroSection;
