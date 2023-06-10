import { ProductsType } from "@/types";
import React from "react";
import StyledContainer from "../shared/StyledContainer";
import {
  Box,
  Icon,
  List,
  MenuItem,
  MenuList,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import PopularProductCard from "./PopularProductCard";

interface PopularProductContainerProps {
  title: string;
  value: ProductsType[];
}

const PopularProductContainer = ({
  title,
  value,
}: PopularProductContainerProps) => {
  const theme = useTheme();
  return (
    <StyledContainer sx={{ padding: theme.spacing(2) }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color={theme.palette.secondary.main}>{title}</Typography>
        <List
          sx={{
            p: 0,

            "& a": {
              color: theme.palette.primary.main,
            },
            "&: hover a": {
              color: theme.palette.primary.light,
            },
            "&:hover svg": {
              transform: "translate(4px)",
              transition: "0.3s",
            },
          }}
        >
          <Link
            href={value[0].categories[0].slug}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ mx: theme.spacing(0.5) }}>Show All</Typography>
            <AiOutlineArrowRight />
          </Link>
        </List>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: theme.spacing(1),
          mt: theme.spacing(2),
        }}
      >
        {value.slice(0, 6).map((item, index) => (
          <PopularProductCard
            key={`popular-product-card-${index}-${title}`}
            item={item}
          />
        ))}
      </Box>
    </StyledContainer>
  );
};

export default PopularProductContainer;
