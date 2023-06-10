import React from "react";
import StyledContainer from "../shared/StyledContainer";
import promo_1 from "/public/assets/images/promotion/offer-1.png";
import promo_2 from "/public/assets/images/promotion/offer-2.png";
import promo_3 from "/public/assets/images/promotion/offer-3.png";
import promo_4 from "/public/assets/images/promotion/offer-4.png";
import { Box, useTheme } from "@mui/system";
import Image, { StaticImageData } from "next/image";

const imageList: StaticImageData[] = [promo_1, promo_2, promo_3, promo_4];

const Promotion = () => {
  const theme = useTheme();
  return (
    <StyledContainer
    // sx={{ overflow: "hidden" }}
    >
      <Box
        sx={{
          padding: theme.spacing(1),
          border: "1px solid red",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "100%",
          gap: theme.spacing(0.5),
          [theme.breakpoints.down("lg")]: {
            gridTemplateColumns: "repeat(2,1fr)",
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {imageList.map((img: any, index: number) => (
          <Box
            key={`img-${index}`}
            sx={{
              position: "relative",
              aspectRatio: 2,
              // m: theme.spacing(0.5),
              borderRadius: theme.spacing(1),
              overflow: "hidden",
            }}
          >
            <Image
              alt={`promotion-${index + 1}`}
              src={img}
              style={{ objectFit: "cover" }}
              fill
            />
          </Box>
        ))}
      </Box>
    </StyledContainer>
  );
};

export default Promotion;
