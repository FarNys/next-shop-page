import { ProductsType } from "@/types";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import StyledButton from "../shared/StyledButton";
import { useRouter } from "next/router";
import { BsCart } from "react-icons/bs";
import { useGlobalContext } from "../Context/context";
import { useLocalStorage } from "@/hooks";
import { updateCartAndStorage } from "@/utils/helper";

interface PopularProductCardProps {
  item: ProductsType;
}

const PopularProductCard = ({ item }: PopularProductCardProps) => {
  const { setCart, cart } = useGlobalContext();
  const theme = useTheme();
  const [storeKey, setStoreKey] = useLocalStorage("cart", []);

  const addToCartHandler = () => {
    let newItem;
    if (cart.length === 0) {
      newItem = [
        {
          count: 1,
          product: item,
        },
      ];
      updateCartAndStorage(newItem, setCart, setStoreKey);
    }
    const findIndex = cart.findIndex((prod) => prod.product.id === item.id);
    if (findIndex > -1) {
      const updateItem = {
        count: cart[findIndex].count + 1,
        product: item,
      };
      newItem = [
        ...cart.slice(0, findIndex),
        updateItem,
        ...cart.slice(findIndex + 1, cart.length),
      ];
      updateCartAndStorage(newItem, setCart, setStoreKey);
    } else {
      newItem = [
        ...cart,
        {
          count: 1,
          product: item,
        },
      ];
      updateCartAndStorage(newItem, setCart, setStoreKey);
    }
  };

  // useEffect(() => {
  //   setStoreKey(cart);
  // }, [cart, setStoreKey]);

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
        <Typography variant="body2" className="clamp-1">
          {item.name}
        </Typography>
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
            <Typography variant="subtitle2">+More</Typography>
          </Link>
        </Box>
        <Button
          sx={{ width: "100%", mt: theme.spacing(2) }}
          variant="outlined"
          startIcon={<BsCart />}
          onClick={addToCartHandler}
        >
          <Typography variant="subtitle1">+ Add To Cart</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default PopularProductCard;
