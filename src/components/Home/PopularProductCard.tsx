import { ProductsType } from "@/types";
import { CLAMP_LINE } from "@/utils/themeConfig";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StyledButton from "../shared/StyledButton";
import { useRouter } from "next/router";

interface PopularProductCardProps {
  item: ProductsType;
}

const PopularProductCard = ({ item }: PopularProductCardProps) => {
  const theme = useTheme();
  const router = useRouter();
  const moreDataHandler = () => {
    router.push(item.slug);
  };
  console.log(item);
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.background.default}`,
        borderRadius: theme.spacing(1),
        "&: hover": {
          border: `1px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: 1.5,
          position: "relative",
        }}
      >
        {item.sale_price && (
          <Chip
            label={`${(100 - (item.sale_price / item.price) * 100).toPrecision(
              2
            )}%`}
            sx={{
              position: "absolute",
              top: theme.spacing(1),
              right: theme.spacing(1),
              zIndex: 10,
            }}
            color="primary"
            size="small"
          />
        )}
        <Image
          alt={item.name}
          src={item.image.thumbnail}
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box sx={{ padding: theme.spacing(2) }}>
        <Typography variant="body2">{item.name}</Typography>
        <Typography className="clamp-2" variant="body2" sx={{ mt: 1 }}>
          {item.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>${item.sale_price ?? item.price}</Typography>
          <Link href={item.slug} style={{ color: theme.palette.primary.main }}>
            +More
          </Link>
        </Box>
        <Button sx={{ width: "100%", mt: 2 }} variant="outlined">
          + Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default PopularProductCard;
